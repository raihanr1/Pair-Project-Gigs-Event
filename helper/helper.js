const bcrypt = require('bcryptjs');

function isValidAccount(passDB, input) {
    let isValid = bcrypt.compareSync(input, passDB);
    if (isValid === true) {
        return true
    }
}

module.exports = {isValidAccount}