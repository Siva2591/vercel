
const mongoose = require('mongoose');

const url =
  'mongodb+srv://rajeshdumpala1432:Tail%401234@cluster0.wyobtyc.mongodb.net/TouchlessAP';

let connection;

const connect = async () => {
  try {
    connection = await mongoose.connect(url, { useUnifiedTopology: true });
    console.log('Database Connected Successfully');
    return connection.connection;
  } catch (error) {
    console.error('Failed To Connect Database:', error);
    throw error;
  }
};


const close = () => {
  if (connection) {
    connection.disconnect();
    console.log('Database Connection Ended');
  }
};

module.exports = { connect, close };
