const mysql = require('mysql');
const confi= require("../confi/confi");


var con = mysql.createConnection({
    host: confi.HOSTDB,
    user: confi.USERDB,
    password: confi.PASSWORDDB
});

const success = ()=> con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});



module.exports = {success};







