const mysql = require('mysql')

const conexao = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Luis95SQL',
	database: 'admin-get-pages'
})

module.exports = conexao