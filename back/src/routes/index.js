const { Router } = require("express")
const getCharByDetail = require("../controllers/getCharByDetail");
const getCharByID = require("../controllers/getCharByID")
let favs = require("../utils/favs")

const router = Router()
//enrutado
router.get("/onsearch/:id", getCharByID)
router.get("/detail/:id", getCharByDetail) //manejamos la logica de la ruta poniendo las funciones

router.post("/rickandmorty/fav", (req, res) => {
    favs.push(req.body);
    res.status(200).json({ status: "ok" });
});

router.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(favs);
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter((char) => char.id != id);
    res.status(200).json({ status: "ok" });
});

module.exports = router