const Blog = require('../models/blog')
//var multer = require('multer');


module.exports = app => {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "*");
		
		next();
	});

//	app.use(multer({dest:'../arquivos/'}));

	app.get('/blog', (req, res) => {
		Blog.lista(res)
	})

	app.get('/blog/:id', (req, res) => {
		const id = parseInt(req.params.id)
		Blog.buscaPorId(id, res)
	})

	app.get('/blogPagina/:pagina', (req, res) => {
		const pagina = req.params.pagina
		Blog.buscaPorPagina(pagina, res)
	})

	app.post('/blog', (req, res) => {
		const categoria = req.body
		Blog.adiciona(categoria, res)
	}) 

	app.patch('/blog/:id', (req, res) => {
		const id = parseInt(req.params.id)
		const valores = req.body
		Blog.altera(id, valores, res)
	})

	app.delete('/blog/:id', (req, res) => {
		const id = parseInt(req.params.id)
		Blog.deleta(id, res)
	})
}