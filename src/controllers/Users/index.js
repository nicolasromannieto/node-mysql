const { createUserService } = require('../../services/User');


async function createUserController(req, res){
    
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    await createUserService(firstName, lastName, email);

}

module.exports = { createUserController };