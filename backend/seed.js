// Load environment variables from .env file
require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model

// Log the MongoDB connection string for debugging purposes
console.log('MONGO_URI:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is undefined. Check your .env file.');
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Check if user already exists to avoid duplicates
    const existingUser = await User.findOne({ username: 'Kyra' });
    if (existingUser) {
      console.log('User already exists:', existingUser);
    } else {
      // Insert a new user
      const newUser = await User.create({ username: 'Kyra', password: 'Kyra' });
      console.log('User created:', newUser);
    }

    // Exit the script
    process.exit();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

