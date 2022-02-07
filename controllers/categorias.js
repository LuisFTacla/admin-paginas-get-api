const Categoria = require('../models/categorias')

module.exports = app => {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "*");
		
		next();
	});

	app.get('/categorias', (req, res) => {
		Categoria.lista(res)
	})

	app.get('/categorias/:id', (req, res) => {
		const id = parseInt(req.params.id)
		Categoria.buscaPorId(id, res)
	})

	app.get('/categoriasPagina/:pagina', (req, res) => {
		const pagina = req.params.pagina
		Categoria.buscaPorPagina(pagina, res)
	})

	app.post('/categorias', (req, res) => {
		const categoria = req.body
		Categoria.adiciona(categoria, res)
	}) 

	app.patch('/categorias/:id', (req, res) => {
		const id = parseInt(req.params.id)
		const valores = req.body
		Categoria.altera(id, valores, res)
	})

	app.delete('/categorias/:id', (req, res) => {
		const id = parseInt(req.params.id)
		Categoria.deleta(id, res)
	})
}