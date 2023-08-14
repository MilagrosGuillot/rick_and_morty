// Server controller (postUser.js)

const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Faltan datos" }); // 400 Bad Request

    const newUser = await User.create({
      email: email,
      password: password,
    });

    res.status(201).json(newUser); // 201 Created
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    return res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

module.exports = postUser;
