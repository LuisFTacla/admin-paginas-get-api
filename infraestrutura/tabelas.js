class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.criarCategorias()
    this.criarBanners()
    this.criarBlog()
    this.criarUsuarios()
    this.criarAnunciantes()
  }

  criarCategorias() {
    const sql = "CREATE TABLE IF NOT EXISTS Categorias (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, nome varchar(100) NOT NULL, pagina varchar(25) NOT NULL, status BOOLEAN NOT NULL)"
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log("Tabela de categorias criada com sucesso")
      }
    })
  }

  criarBlog() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Blog (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, pagina varchar(15) NOT NULL, categoria varchar(100) NOT NULL, titulo varchar(150) NOT NULL, cabecalho varchar(100), texto text NOT NULL, imagem varchar(200), data timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, status INT NOT NULL)"
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log("Tabela de blog criada com sucesso")
      }
    })
  }

  criarBanners() {
    const sql = "CREATE TABLE IF NOT EXISTS Banners (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, imagem varchar(200) NOT NULL,  nome varchar(50) NOT NULL, pagina varchar(25) NOT NULL, cabecalho varchar(100) NOT NULL, anunciante varchar(50) NOT NULL, url varchar(200) NOT NULL, exibir boolean NOT NULL )"
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log("Tabela de banners criada com sucesso")
      }
    })
  }

  criarUsuarios() {
    const sql = "CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, usuario varchar(100) NOT NULL, login varchar(50) NOT NULL, email varchar(50) NOT NULL, perfil varchar(10) NOT NULL, senha varchar(25) NOT NULL, status BOOLEAN NOT NULL)"
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log("Tabela de usuários criada com sucesso")
      }
    })
  }

  criarAnunciantes() {
    const sql = "CREATE TABLE IF NOT EXISTS Anunciantes (shopsid int NOT NULL AUTO_INCREMENT PRIMARY KEY, shopslogo varchar(200), shopslink varchar(100) NOT NULL, shopsname varchar(100) NOT NULL, number_offers int NOT NULL, clicks_offers INT NOT NULL, shopsstatus INT NOT NULL)"
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log("Tabela de anunciantes criada com sucesso")
      }
    })
  }
}

module.exports = new Tabelas()
