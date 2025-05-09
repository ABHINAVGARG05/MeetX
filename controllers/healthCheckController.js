exports.healthCheck = (req, res) => {
  return res.status(200).json({ message: "Server is working fine" });
};
