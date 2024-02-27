const { Router } = require("express");
const axios = require("axios");
const router = Router();

const EXTERNAL_API_URL =
  "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json";

function paginateResults(results, page = 1, perPage = 9) {
  const start = (page - 1) * perPage;
  const end = page * perPage;

  return results.slice(start, end);
}

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(EXTERNAL_API_URL);

    if (response.status !== 200) {
      throw new Error("Erro ao obter dados da API externa");
    }

    const { results } = response.data;
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.get("/page", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const perPage = parseInt(req.query.perPage);

    const response = await axios.get(EXTERNAL_API_URL);

    if (response.status !== 200) {
      throw new Error("Erro ao obter dados da API externa");
    }

    const { results } = response.data;
    const paginatedData = paginateResults(results, page, perPage);

    res.json(paginatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.get("/", async (req, res) => {
  
})
  

module.exports = router;
