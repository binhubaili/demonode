// 'user strict';
const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var con = mysql.createConnection({
  host: "35.240.252.229",
  user: "root",
  password: "password",
  database: "employee"
});

con.connect((err)=>{
	if (!err) 
		console.log('DB Connected Successfully..!');
	else
		console.log('DB connection failed. \n Error : '+ JSON.stringify(err, undefined, 2));

});




// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'employee'
// });

// pool.getConnection(function(err, connection) {
//    console.log("Database is connected ... nn");
//   // Use the connection
//   connection.query('SELECT * FROM employee', function (error, results, fields) {
//     // And done with the connection.
//     console.log(results);
//     connection.release();

//     // Handle error after the release.
//     if (error) throw error;

//     // Don't use the connection here, it has been returned to the pool.
//   });
// });


router.get('/', (req, res, next) =>{
	con.query('SELECT * from employee',(err, rows, fields) => {
		if (!err) {
			 console.log(rows); //shows data in console 
  //      res.render('index',{
  //   "title":"Express"
  // });
			//res.send(rows)  // shows data in browser
			res.status(201).json({
				details: rows
			})
		}else{
			console.log(err);
		}
// 	})
// });

// connection.connect(function(req, res, next)  {
//   // if (err) throw err;
//   var data = connection.query("SELECT * FROM employee", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
  //   res.render('index',{
  //   "title":"Express"
  // });
     // res.send({message: "sdfsdf"});
  //    result.json({
  //    	details : result
			 	
	 })
});
module.exports = router;