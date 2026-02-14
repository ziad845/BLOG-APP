export const createBlog = async (req, res) => {
  try {
    res.json({ message: "Blog created successfully " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
