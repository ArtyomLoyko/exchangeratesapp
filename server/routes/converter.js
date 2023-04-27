const router = require("express").Router();
const authorize = require("../middleware/authorize");
const Axios = require('axios');

const converterApi = Axios.create({
  baseURL: `${process.env.FREECURRENCYAPI_ENDPOINT}`,
  params: {
    apikey: process.env.FREECURRENCYAPI_KEY,
  }
});

router.get("/latest", authorize, async (req, res) => {
  try {
    const response = await converterApi.get(`/latest`, {
      params: req.query
    })

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/currencies", authorize, async (req, res) => {
  try {
    const response = await converterApi.get(`/currencies`, {
      params: req.query
    })

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/historical", authorize, async (req, res) => {
  try {
    const response = await converterApi.get(`/historical`, {
      params: req.query
    })

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
