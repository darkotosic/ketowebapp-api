const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
const onboardingRoute = require('./routes/onboarding');
app.use('/api/onboarding', onboardingRoute);

app.get('/', (req, res) => {
    res.send('Keto Web App API is running.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});