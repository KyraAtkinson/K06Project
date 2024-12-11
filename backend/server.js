
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const authRoutes = require('./routes/auth'); 
const chartsRoutes = require('./routes/charts');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/charts', chartsRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Add test code here to verify the connection
    const User = require('./models/User'); // Import the User model

    mongoose.connection.once('open', async () => {
      try {
        const users = await User.find(); // Retrieve all users from the database
        console.log('Users in the database:', users); // Log users for debugging
      } catch (err) {
        console.error('Error retrieving users:', err);
      }
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
