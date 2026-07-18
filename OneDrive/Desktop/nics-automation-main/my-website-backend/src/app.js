const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const getClientIP = require('./middleware/ipMiddleware');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(getClientIP);

// Connect to MongoDB
connectToMongo();

// Example route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});