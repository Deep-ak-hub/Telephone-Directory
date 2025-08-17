const multer = require("multer");
const fs = require("fs");
const randomStringGenerator = require("../utils/randomStringGenerator");

const uploader = (type = "image") => {
  const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const path = "./public/uploads";
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
      }
      cb(null, path);
    },

    filename: (req, file, cb) => {
      const fileName = randomStringGenerator(10) + "-" + file.originalname;
      cb(null, fileName);
    },
  });

  let allowedTypes = ["jpg", "jpeg", "png", "svg", "bmp", "webp", "gif"];
  let limit = 3000000;

  if (type === "audio") {
    allowedTypes = ["mp3", "m3u8"];
    limit = 5000000;
  } else if (type === "doc") {
    allowedTypes = ["pdf", "json", "doc", "docx"];
    limit = 4000000;
  } else if (type === "video") {
    allowedTypes = ["mp4"];
    limit = 10000000;
  }

  const validateFileType = (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    if (allowedTypes.includes(ext.toLowerCase())) {
      cb(null, true);
    } else {
      cb({
        code: 422,
        message: "File format not supported",
        status: "INVALID_FILE_ERROR",
      });
    }
  };

  return multer({
    storage: myStorage,
    fileFilter: validateFileType,
    limits: {
        fileSize: limit
    },
  });
};

module.exports = uploader;
