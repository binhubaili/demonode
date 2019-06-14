// 'user strict';
const express = require('express');
const router = express.Router();
const mysql = require('mysql');


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "employee"
// });

// con.connect((err)=>{
// 	if (!err) 
// 		console.log('DB Connected Successfully..!');
// 	else
// 		console.log('DB connection failed. \n Error : '+ JSON.stringify(err, undefined, 2));

// });




//local mysql db connection
var db_config = {
  host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee'
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();


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
connection.connect(function(req, res, next)  {
  // if (err) throw err;
  var data = connection.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
     // res.send({message: "sdfsdf"});
  //    result.json({
  //    	details : result
			 	
	 })
});
module.exports = router;