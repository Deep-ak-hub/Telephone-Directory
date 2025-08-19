const randomStringGenerator = (length = 50) => {
    const chars = "abcdefghijklmmopqrstuvwxyzABCDEFGHIMKLMNOPQRSTUVWXYZ0123456789"
    const len = chars.length
    let random = ""
    for(let i = 0; i < length; i++) {
        let position = Math.ceil(Math.random() * (len -1))
        random += chars[position] 
    }
    return random
}

module.exports = randomStringGenerator