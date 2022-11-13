//schema for users

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email field is required"],
      unique: true,
    },

    encryptedPassword: {
      type: String,
      required: [true, "Password field is required"],
      min: [6, "Password must be atleast 5 characters long"],
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.setEncryptedPassword = function (
  plainPassword,
  callbackFunction
) {
  // dont use arrow function so that you have 'this'
  // "this" is the user instance
  bcrypt.hash(plainPassword, 12).then((hash) => {
    // '12' is how many rounds of salt.
    // use arrrow function here so you inherit 'this' from the previous function
    this.encryptedPassword = hash;
    callbackFunction();
  });
};

userSchema.methods.verifyPassword = function (plainPassword, callbackFunction) {
  bcrypt.compare(plainPassword, this.encryptedPassword).then((result) => {
    callbackFunction(result);
    // finish code will come from password
  });
};

var User = mongoose.model("User", userSchema);

module.exports = User;
