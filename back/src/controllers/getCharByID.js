const express = require("express");
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"
const url = "https://be-a-rym.up.railway.app/api"
const KEY = "cf893d2caad2.349d61a2b53d07cb1b33"


const getCharByID = (res, req) => {
    let { id } = req.params
    axios.get(`${url}/character/${id}?key=${KEY}`)
        .then(response => {
            const { name, species, image, gender } = response.data
            res.status(200).json({ name, species, image, gender })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

module.exports = getCharByID

