const mongoose = require('mongoose');

// const phoneNumberSchema = new mongoose.Schema({
//   pre: {
//     type: Number,
//     minLength: 2,
//     maxLength: 3,
//     require: true,
//   },
//   concat: {
//     type: String,
//     require: true,
//     default: '-',
//     minLength: 1,
//     maxLength: 1,
//   },
//   number: {
//     type: Number,
//     require: true,
//     minLength: 6,
//   },
// });

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
  number: String,
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
