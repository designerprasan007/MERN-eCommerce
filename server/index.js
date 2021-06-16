require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT || 5000 

const database = require('./app/config/database');
const admin = require('./app/routes/Admin');
const store = require('./app/routes/Store')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());


app.use('/admin', admin);
app.use('/store', store)

app.listen(PORT, () =>{
	database();
	console.log(`server started on ${PORT}`);
})
