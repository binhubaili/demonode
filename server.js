// var http = require('http');
// const mysql = require('mysql');

// //Database Connection 
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


//  http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);



const http = require('http');

const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);


server.listen(port);

