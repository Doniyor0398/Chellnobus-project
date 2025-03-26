const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    schedule: {
      type: String,
    },
    shift: {
      type: String,
    },
    vehicle: {
      type: String,
    },
    name_vehicle: {
      type: String,
    },
  },
  { timestamps: true }
);

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
