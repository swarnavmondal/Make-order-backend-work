const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const Client = require("../client_models/Client.model");


const { clientSchema } = require("../client_helpers/Client_Vallidation_schema");


router.post("/register", async (req, res, next) => {
  try {
    const result = await clientSchema.validateAsync(req.body);

    const doesExist = await Client.findOne({
      email: result.email,
    });
    if (doesExist)
      throw createError.Conflict(`${result.email} is already registered.`);

    const client = new Client(result);
    const savedClient = await client.save();


    res.send({ savedClient});
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const result = await clientSchema.validateAsync(req.body);
    const client = await Client.findOne({ email: result.email });
    if (!client) throw createError.NotFound("user not registered")
    
    
    const isMatch = await client.isValidPassword(result.password)
    if(!isMatch) throw createError.Unauthorized('Username/password not vaild')

   

    res.send("Successfully Logged In")  
  } catch (error) {
    if (error.isJoi === true)
      return next(createError.BadRequest("Invalid Username/Password"));
    next(error);
  }
});





module.exports = router;
