const cloudinary = require("cloudinary").v2;
const { CloudinaryConfig } = require("../config/dotenv.config");
const { fileDelete } = require("../utils/delete-file");

/**
 * configuration
 * file upload
 * optimization
 * transformation
 */

class CloudinaryService {
  constructor() {
    // configuration
    cloudinary.config({
      cloud_name: CloudinaryConfig.cloudName,
      api_key: CloudinaryConfig.apiKey,
      api_secret: CloudinaryConfig.apiSecret,
    });
  }

  //   file upload
  async singleFileUpload(filePath, dir = null, size = "1024*1024") {
    try {
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        filePath,
        {
          unique_filename: true,
          folder: dir ? "/tel-dir" + dir : "/tel-dir",
        }
      );

      //   optimization and transformation
      const thumbUrl = this.optimizeIamge(public_id, size);

      //   delete temp file
      fileDelete(filePath);

      return {
        publicId: public_id,
        url: secure_url,
        thumbUrl: thumbUrl,
      };
    } catch (exception) {
      console.log(exception);

      throw {
        code: 500,
        message: "Error uploading file to cloudinary",
        status: "CLOUDINARY_UPLOAD_ERR",
      };
    }
  }

  async multipleFileUpload(filePath, dir = null, size = "1024*1024") {
    try {
      if (files && files.length) {
        let uploadedFiles = [];
        files.map((file) => {
          uploadedFiles.push(this.singleFileUpload(file.path, dir, size));
        });

        let returnFiles = [];
        const settlement = await Promise.allSettled(uploadedFiles);
        settlement.forEach((uploadedFiles) => {
          if (uploadedFiles.status === "fulfilled") {
            returnFiles.push(uploadedFiles.value);
          }
        });
        return returnFiles;
      } else {
        return null;
      }
    } catch (exception) {
      throw {
        code: 500,
        message: "Error uploading file to cloudinary",
        status: "CLOUDINARY_UPLOAD_ERR",
      };
    }
  }

  //transformation + optimization
  optimizeIamge(public_id, size = "1024*1024") {
    let { width, height } = size.split("x");
    return cloudinary.url(public_id, {
      transformation: [
        {
          aspect_ratio: "1.0",
          height: height,
          width: width,
          crop: "fill",
        },
      ],
    });
  }
}

const cloudinaryService = new CloudinaryService();

module.exports = { cloudinaryService };
