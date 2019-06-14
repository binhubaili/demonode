const express = require('express');
const app = express();
//const morgan = require('morgan');//It gives log means status code and execution time
const bodyParser = require('body-parser');
const mysql = require('mysql');

//Database Connection 
// var mysqlConnection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'employee'
// });
// mysqlConnection.connect((err)=>{
// 	if (!err) 
// 		console.log('DB Connected Successfully..!');
// 	else
// 		console.log('DB connection failed. \n Error : '+ JSON.stringify(err, undefined, 2));

// });

// const productRoutes = require('./api/routes/products');
// const orderRoutes = require('./api/routes/orders');
// const signupRoutes = require('./api/routes/signup');
const detailsRoutes = require('./api/routes/details');

//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));//Support simple body urlencoded data for parse.
app.use(bodyParser.json());//It can accept json data in simple readable form


// app.use('/signup', signupRoutes);
app.use('/details', detailsRoutes);

// //Error Handling
// app.use((req, res, next) => {
// 	const error = new Error('Not Found..');
// 	error.status = 404;
// 	next(error); 
// });

// app.use((error, res, req, next) => {
// 	res.status(error.status || 500);
	
// 	res.json({
// 		error:{
// 			message: error.message
// 		}
// 	});
// });


module.exports = app;
