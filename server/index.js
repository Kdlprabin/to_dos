const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chitwannepal#4",
  database: "todos",
  port: 3000
});

connection.connect(function (err){
    if(err){
        return console.error(err);
    }
    console.log("connection success")
})