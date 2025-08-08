const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./config/db.config")
const app = require("./config/express.config");

dotenv.config();
connectDB()

const PORT = process.env.PORT || 9005;
const HOST = process.env.HOST || "127.0.0.1"
const server = http.createServer(app);

server.listen(PORT, HOST, (err) => {
  if (!err) {
    console.log(`Server is running on the port ${PORT}`);
    console.log(`Press CTRL C to disconnect the server....`);
  }
});
