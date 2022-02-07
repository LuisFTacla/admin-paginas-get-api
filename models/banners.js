const conexao = require("../infraestrutura/conexao")
const uploadArquivo = require("../arquivos/uploadArquivos")

class Banners {
  /*

  adiciona(banner, res) {
    const sql = "INSERT INTO Banners SET ?"

    uploadArquivo(banner.imagem, banner.nome, (erro, novoCaminho) => {
      if (erro) {
				res.status(400).json({erro})
      } else {
        const novoBanner = { nome: banner.nome, pagina: banner.pagina, anunciante: banner.anunciante, exibir: banner.exibir, imagem: novoCaminho }
        conexao.query(sql, novoBanner, (erro) => {
          if (erro) {
            console.log(erro)
            res.status(400).json(erro)
          } else {
            res.status(200).json(novoBanner)
          }
        })
      }
    })
  }
  */

  adiciona(banner, res) {
		const sql = "INSERT INTO Banners SET ?"

		conexao.query(sql, banner, (erro, resultados) => {
			if(erro) {
				res.status(400).json(erro)
			} else {
				res.status(201).json({banner})
			}
		})
	}

  lista(res) {
		const sql = "SELECT * FROM Banners"

		conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
	}

  buscaPorId(id, res) {
		const sql = `SELECT * FROM Banners WHERE id=${id}`

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
		const sql = "UPDATE Banners SET ? WHERE id=?"

		conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({...valores, id})
      }
    })
	}

  deleta(id, res) {
		const sql = "DELETE FROM Banners WHERE id=?"

		conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({id})
      }
    })
	}
}

module.exports = new Banners()
