const RoleExp = /^(customer|seller)$/;
const GenderExp = /^(male|female|other)$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_-]).{8,25}/;
const PhoneRegex = /^\+?[0-9]{7,25}$/

module.exports = {
    RoleExp,
    GenderExp,
    PasswordRegex,
    PhoneRegex
}