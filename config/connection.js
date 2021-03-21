const mysql = require("mysql");

let connection;

let connection;
if(process.env.JAWSDB_URL && process.env.JAWSDB_URL.length > 0){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gautham@01",
    database: "burger_db"
  });
};

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection; 