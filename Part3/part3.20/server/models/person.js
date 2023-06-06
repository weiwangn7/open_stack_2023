const mongoose = require('mongoose');

const prePhoneNumberSchema = new mongoose.Schema({
  pre: {
    type: Number,
    minLength: 2,
    maxLength: 3,
    require: true,
  },
});

const PhoneNumberSchema = new mongoose.Schema({
  number: {
    type: Number,
    require: true,
    minLength: 6,
  },
});

const phonebookSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    minLength: 3,
    require: true,
  },
  number: {
    type: String,
    validate: {
      validator: function (phoneNumber) {
        return /\d{2,3}-\d{6,}/.test(phoneNumber);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
    require: [true, 'User Phone number required'],
  },
});

phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // returnedObject._id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
// }

module.exports = mongoose.model('Phonebook', phonebookSchema);
