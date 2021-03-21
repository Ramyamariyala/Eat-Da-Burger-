const connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob){
        applicationCache.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

var orm = {
    all:function (tableInput, cd){
        var queryString = "SELECT * FROM " + tableInput + ";"
        connectuon.query(queryString, function (err, result) {
            if(err) {
                throw err;
            }
            cd (result);
        });
    },

    create: function (table, cols, vals, cd){
        var queryString = "INSERT INTO" + table;

        queryString += "(" ;
        queryString += cols.toString();
        queryString += ")" ;
        queryString += "VALUES (" ;
        queryString += printQuestionMarks(vals.length); ;
        queryString += ")" ;

        console.log(queryString);

        connection.query(queryString, vals, function (err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, odjColVals, condition, cb){
        var queryString = "UPDATE" + table;
        queryString += "SET" ;
        queryString += "objToSql(objColVals)" ;
        queryString += "WHERE" ;
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result){
            if(err) {
                throw err;
            }
            cd(result);
        });
    }
};

module.exports = orm;