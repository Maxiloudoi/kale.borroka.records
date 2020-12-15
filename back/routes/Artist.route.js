const express = require("express");
const RouterArtists = express.Router();
const Artist = require("../models/Artist");
const Location = require("../models/Location");

RouterArtists.get("/", async (req, res) => {
  try {
    const result = await Artist.findAll({ includes: { models: Location } });
    res.status(200).json(result);
    console.log(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Artist.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.post("/", async (req, res) => {
  const { name, LocationId } = req.body;
  try {
    const result = await Artist.create({ name, LocationId });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, LocationId } = req.body;
  try {
    await Artist.update(
      {
        name,
        LocationId,
      },
      { where: { id } }
    );
    res.status(200).json(`Artist ${id} is modified`);
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Artist.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterArtists;