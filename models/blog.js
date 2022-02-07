const { query } = require("express")
const conexao = require("../infraestrutura/conexao")

class Blog {
  adiciona(blog, res) {
    const sql = "INSERT INTO Blog SET ?"

    conexao.query(sql, blog, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(201).json({blog})
      }
    })
  }

	lista(res) {
    const sql = "SELECT * FROM Blog"

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

	buscaPorId(id, res) {
    const sql = `SELECT * FROM Blog WHERE id=${id}`
    conexao.query(sql, (erro, resultados) => {
      const categoria = resultados[0]
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(categoria)
      }
    })
  }

	buscaPorPagina(page, res) {
    const sql = `SELECT * FROM Blog WHERE pagina='${page}'`
    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

	altera(id, valores, res) {
    const sql = "UPDATE Blog SET ? WHERE id=?"
    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({...valores, id})
      }
    })
  }

  deleta(id, res) {
    const sql = "DELETE FROM Blog WHERE id=?"
    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({id})
      }
    })
  }
}

module.exports = new Blog()