var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  console.log(process.env)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  console.log("connecting locally");
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gautham@01",
    database: "burgers_db"
  });
};

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});