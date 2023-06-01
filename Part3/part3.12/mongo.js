const mongoose = require('mongoose');
// const url = process.env.MONGO_URL;
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}
const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://phonebook:${password}@phonebook.npnvmcx.mongodb.net/?retryWrites=true&w=majority`;

// console.log(url);
main().catch(err => console.log(err));
async function main() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected!!!'))
    .catch(error => console.log(error));

  const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

  const Phonebook = mongoose.model('Phonebook', phonebookSchema);

  const person = new Phonebook({
    name: name,
    number: number,
  });

  if (process.argv.length > 3) {
    const res = await person.save();
    then(res => {
      console.log(`added ${res.name} number ${res.number} to phonebook`);
      mongoose.connection.close();
    });
  } else {
    await Phonebook.find({}).then(res => {
      console.log('phonebook:');
      res.forEach(person => {
        console.log(person.name, person.number);
      });
      mongoose.connection.close();
    });
  }
}
