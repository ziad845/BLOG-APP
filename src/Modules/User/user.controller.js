export const getAllUsers = async (req, res) => {
  try {
    res.json({ message: "All users fetched " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
