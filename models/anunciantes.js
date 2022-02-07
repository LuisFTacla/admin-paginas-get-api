const { query } = require("express")
const conexao = require("../infraestrutura/conexao")

class Anunciante {
	adiciona(anunciante, res) {
		const sql = "INSERT INTO Anunciantes SET ?"

		conexao.query(sql, anunciante, (erro, resultados) => {
			if(erro) {
				res.status(400).json(erro)
			} else {
				res.status(201).json({anunciante})
			}
		})
	}

	lista(res) {
		const sql = "SELECT * FROM Anunciantes"

		conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
	}

	buscaPorId(id, res) {
		const sql = `SELECT * FROM Anunciantes WHERE shopsid=${id}`

		conexao.query(sql, (erro, resultados) => {
      const categoria = resultados[0]
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(categoria)
      }
    })
	}

	altera(id, valores, res) {
		const sql = "UPDATE Anunciantes SET ? WHERE shopsid=?"

		conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({...valores, id})
      }
    })
	}

	deleta(id, res) {
		const sql = "DELETE FROM Anunciantes WHERE shopsid=?"

		conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({id})
      }
    })
	}
}

module.exports = new Anunciante()