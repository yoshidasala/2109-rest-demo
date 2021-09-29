const express = require("express");
const router = express();
module.exports = router;

const client = require("../db/client");
client.connect()

router.get("/", async (req, res, next) => {
  try {

    const result = await client.query("SELECT * FROM characters");
    res.send(result.rows)

  } catch (e) {
    next(e);
  }
});

router.post("/", async(req, res,next) => {

  try {
    const newchar = req.body.name;
    await client.query(`INSERT INTO charcters(name,rosternum)VALUE ($1,'whatever')`)[newchar];
    res.send(" new char inserted");
  }catch (e) {
    next(e);
  }

});

