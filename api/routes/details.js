'user strict';
const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
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




//local mysql db connection



// router.get('/', (req, res, next) =>{
// 	con.query('SELECT * from employee',(err, rows, fields) => {
// 		if (!err) {
// 			 console.log(rows); //shows data in console 
// 			res.send(rows)  // shows data in browser
// 			// res.status(201).json({
// 			// 	details: rows
// 			// })
// 		}else{
// 			console.log(err);
// 		}
// 	})
// });
con.connect(function(req, res, next)  {
  // if (err) throw err;
  var data = con.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
     // res.send(result);
  //    result.json({
  //    	details : result
			 	
	 })
});
module.exports = router;