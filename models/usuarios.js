const { query } = require("express")
const conexao = require("../infraestrutura/conexao")

class Usuario {
	adiciona(usuario, res) {
		const sql = "INSERT INTO Usuarios SET ?"

		conexao.query(sql, usuario, (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(201).json({usuario})
			}
		})
	}

	lista(res) {
		const sql = "SELECT * FROM Usuarios"

		conexao.query(sql, (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(200).json(resultados)
			}
		})
	}

	buscaPorId(id, res) {
		const sql = `SELECT * FROM Usuarios WHERE id=${id}`
		conexao.query(sql, (erro, resultados) => {
			const usuario = resultados[0]
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(200).json(usuario)
			}
		})
	}

	altera(id, valores, res) {
		const sql = "UPDATE Usuarios SET ? WHERE id=?"
		conexao.query(sql, [valores, id], (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(200).json({...valores, id})
			}
		})
	}

	deleta(id, res) {
		const sql = "DELETE FROM Usuarios WHERE id=?"
		conexao.query(sql, id, (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(200).json({id})
			}
		})
	}
}

module.exports = new Usuario()