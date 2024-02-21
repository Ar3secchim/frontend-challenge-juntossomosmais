const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/api", async (req, res) => {
  try {
    const { page = 1, pageSize = 9 } = req.query;
    const response = await axios.get(
      "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json"
    );
    const { results } = response.data;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedData = results.slice(startIndex, endIndex);

    res.status(200).json(paginatedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
