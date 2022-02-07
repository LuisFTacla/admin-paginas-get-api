const { query } = require("express")
const conexao = require("../infraestrutura/conexao")

class Categoria {
  adiciona(categoria, res) {
    const sql = "INSERT INTO Categorias SET ?"

    conexao.query(sql, categoria, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(201).json({categoria})
      }
    })
  }

  lista(res) {
    const sql = "SELECT * FROM Categorias"

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Categorias WHERE id=${id}`
    conexao.query(sql, (erro, resultados) => {
      const categoria = resultados[0]
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(categoria)
      }
    })
  }

	buscaPorPagina(pagina, res) {
    const sql = `SELECT * FROM Categorias WHERE pagina='${pagina}'`
    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  altera(id, valores, res) {
    const sql = "UPDATE Categorias SET ? WHERE id=?"
    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({...valores, id})
      }
    })
  }

  deleta(id, res) {
    const sql = "DELETE FROM Categorias WHERE id=?"
    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({id})
      }
    })
  }
}

module.exports = new Categoria()
