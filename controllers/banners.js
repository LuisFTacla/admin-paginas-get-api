const multer = require("multer")
const multerConfig = require("../config/multer")
const Banners = require("../models/banners")

const Post = require("../models/Post")

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "*")

    next()
  })

  app.get("/banners", (req, res) => {
    Banners.lista(res)
  })

  app.get("/banners/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Banners.buscaPorId(res)
  })

  app.get("/getBanner", multer(multerConfig).single("imagem"), (req, res) => {
    console.log(req.file)
  })

  app.post("/banners", multer(multerConfig).single("file"), async (req, res) => {
		const { originalname: name, size, key, url = "" } = req.file
		const post = await Post.create({
      name,
      size,
      key,
      url,
    })
    const banner = req.body
    Banners.adiciona(banner, res)
		console.log(post.url);
  })
/*
  app.post("/uploadBanner", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: name, size, key, url = "" } = req.file
    const post = await Post.create({
      name,
      size,
      key,
      url,
    })
    return res.json(post)
  })
*/
  app.patch("/banners/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Banners.altera(id, valores, res)
  })

  app.delete("/banners/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Banners.deleta(id, res)
  })
}
