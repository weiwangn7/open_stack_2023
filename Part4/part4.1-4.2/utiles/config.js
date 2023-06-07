require('dotenv').config();

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

module.exports = {
  URL,
  PORT,
};
