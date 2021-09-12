require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000 

const database = require('./app/config/database');
const admin = require('./app/routes/Admin');
const store = require('./app/routes/Store');
const product = require('./app/routes/Product');
const user = require('./app/routes/Users')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());


app.use('/admin', admin);
app.use('/store', store);
app.use('/product', product);
app.use('/users', user);

app.use(express.static(path.join(__dirname, 'productImg')));


app.listen(PORT, () =>{
	database();
	console.log(`server started on ${PORT}`);
})
