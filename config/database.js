const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(
      process.env.MONGODB_URI.replace(
        '<PASSWORD>',
        process.env.MONGODB_PASSWORD
      ),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log('Database connection successfully');
    });
};

module.exports = connectDatabase;
