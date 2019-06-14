const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "employee"
});

con.connect((err)=>{
	if (!err) 
		console.log('DB Connected Successfully..!');
	else
		console.log('DB connection failed. \n Error : '+ JSON.stringify(err, undefined, 2));

});

router.post('/', (req, res, next) =>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var mobile = req.body.mobile;
    
  var sql = `INSERT INTO employee ( fname, lname, mobile)VALUES( ?, ?, ?)`;
  con.query(sql, [fname, lname, mobile], function (err, data) {
 
    if (err) {
        	throw err;
    } else {
        // successfully inserted into db
        console.log("Record inserted..!");

        res.status(201).json({
        	message: "Record inserted..!"
        });
    	}
	})
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO employee (id,fname, lname, mobile) VALUES ('10', 'bahr','dubaiyy', '223535437')";
//   con.query(sql, function (err, result) {
//     if (err){ throw err;}
//     else{
//     console.log("Record inserted");}
//   });
// });



// router.post('/',(req, res, next) => {
// 	const signup = {
// 		id: req.body.id,
// 		fname: req.body.fname,
// 		lname: req.body.lname,
// 		mob: req.body.mob

// 	};
// 	res.status(201).json({
// 		message: 'Handling POST request for signup',
// 		data: signup
// 	});
// });

module.exports = router;