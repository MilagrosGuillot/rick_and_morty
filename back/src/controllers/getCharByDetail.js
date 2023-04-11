
const axios = require("axios");
const url = "https://be-a-rym.up.railway.app/api"
const KEY = "cf893d2caad2.349d61a2b53d07cb1b33"

const getCharByDetail = (req, res) => {
    const {id} = req.params;
    axios.get(`${url}/character/${id}?key=${KEY}`)
    .then((response) => {
        const {id, name, species, image, gender, origin} = response.data;
            res.status(200).json({id, name, species, image, gender, origin})
    })
  .catch((error) => {
  res.status(500).json({error: error.message})
  })
  
}
module.exports = getCharByDetail
