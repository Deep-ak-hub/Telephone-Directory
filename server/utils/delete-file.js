const fs = require("fs")

const fileDelete = (path) => {
    if(fs.existsSync(path)) {
        return fs.unlinkSync(path)
    }
    return false
}

module.exports = {
    fileDelete
}