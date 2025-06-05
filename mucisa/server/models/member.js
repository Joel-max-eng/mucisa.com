 const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: String,
 joinedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Member', memberSchema);

// This code defines a Mongoose schema for a member in a MongoDB database, including fields for name, email, role, and the date they joined. The email field is unique to prevent duplicate entries. The model is then exported for use in other parts of the application.