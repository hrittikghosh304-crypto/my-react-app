const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/digitalproductplatform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Digital Product Platform API' });
});

// API Routes
app.use('/api/auth', require('./backend/routes/authRoutes'));
app.use('/api/products', require('./backend/routes/productRoutes'));
app.use('/api/users', require('./backend/routes/userRoutes'));
app.use('/api/admin', require('./backend/routes/adminRoutes'));
app.use('/api/payments', require('./backend/routes/paymentRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});