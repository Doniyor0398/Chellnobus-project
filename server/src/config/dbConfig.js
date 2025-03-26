const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/chebu';

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ Подключено к MongoDB');
    } catch (err) {
      console.error('❌ Ошибка подключения к MongoDB:', err);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;