const con = require("../dbconfig");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    let sql = "SELECT * FROM users";
    const result = await con.promise().query(sql);
    res.status(200).json({ data: result[0] });
  } catch (err) {
    console.log("Error feching data", err);
  }
});
router.get("/:id", (req, res) => {
  res.send(res.user);
});

router.post("/", async (req, res) => {
  const id = uuidv4();
  const created_at = Date.now()
  console.log(created_at)
  console.log(req.body.staff);
  const  username  = req.body.staff;
  const user = {
    id,
    username,
    created_at,
  };

  try {
    let sql = "INSERT INTO users SET ?";
    const result = await con.promise().query(sql, user, (err, rows) => {
      if (err) {
        throw err;
      }
    });
    res.send("user created");
  } catch (err) {
    console.log("Error in request", err);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await con
      .promise()
      .query(`DELETE FROM users WHERE id=?`, [id]);
    res.send("user Deleted");
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
