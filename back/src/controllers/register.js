const { User } = require("../DB_connection");

const register = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password)
      return res.status(404).json({ message: "Faltan datos" });

      const dbactivity = await User.create({ email, password })

    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = register;

