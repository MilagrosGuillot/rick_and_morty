
const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/"


const getCharByDetail = (req, res) => {
    const {id} = req.params;
    axios.get(`${url}/${id}`)
    .then((response) => {
        const {id, name, species, image, gender, origin} = response.data;
            res.status(200).json({id, name, species, image, gender, origin})
    })
  .catch((error) => {
  res.status(500).json({error: error.message})
  })
  
}
module.exports = getCharByDetail
