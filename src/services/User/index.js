const { User } = require('../../models/Users');

async function createUserService(firstName, lastName, email){

    console.log(`Creating user with first name ${firstName}, last name ${lastName}, email ${email}`);

    await User.create({firstName, lastName, email})

}

module.exports = { createUserService };