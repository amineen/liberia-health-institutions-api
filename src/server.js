const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/health-institutions-routes');
const connectDB = require('./config/db');

dotenv.config();
//Connect to DB
connectDB();
const app = express();

//Body Parser
app.use(express.json());

//Enable cors
app.use(cors());
//Routes
app.use('/api/v1/health-institutions', router );
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));
