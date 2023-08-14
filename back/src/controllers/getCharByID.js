
const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/"


const getCharByID = (req, res) => {
    let { id } = req.params
    axios.get(`${url}/${id}`)
        .then(response => {
            const { name, species, image, gender } = response.data
            res.status(200).json({ name, species, image, gender })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

module.exports = getCharByID

