const Anunciante = require('../models/anunciantes')

module.exports = app => {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "*");
		
		next();
	});

	app.get('/anunciantes', (req, res) => {
		Anunciante.lista(res)
	})

	app.get('/anunciantes/:id', (req, res) => {
		const id = parseInt(req.params.id)
		Anunciante.buscaPorId(id, res)
	})

	app.post('/anunciantes', (req, res) => {
		const anunciante = req.body
		Anunciante.adiciona(anunciante, res)
	}) 

	app.patch('/anunciantes/:id', (req, res) => {
		const id = parseInt(req.params.id)
		const valores = req.body
		Anunciante.altera(id, valores, res)
	})

	app.delete('/anunciantes/:id', (req, res) => {
		const id = parseInt(req.params.id)
		Anunciante.deleta(id, res)
	})
}