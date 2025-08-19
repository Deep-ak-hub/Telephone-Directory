const createDate = (date, days) => {
    date = new Date(date)
    date = new Date(date.getTime() + days * 86400000)
}

module.exports = { createDate }