const joi = require("joi");

// Validation schema
const createUserValidationSchema = joi.object({
  name: joi.string().min(3).max(10).required(),
  password: joi.string().min(3).max(10).required(),
});

// Function to validate user
function validateUser(name, password) {
  const result = createUserValidationSchema.validate({
    name: name,
    password: password,
  });

  return result;
}

// Export function
module.exports.validateUser = validateUser;
