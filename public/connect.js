var mysql = require('mysql');

var conn = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'mysql_node'
});

conn.connect(function (err){

    if (err) throw err.stack;
   
         res.render('index',{results});
    
});
connection.query('select * from tbl_sinhvien', function (error, results, fields) {
	      if (error) throw error;
          res.render('index',{results});
	    });