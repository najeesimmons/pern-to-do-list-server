const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());

app.use(express.json); // => allows us to access the req.body

// ROUTES

//get ALL todos

// get a todo

// create a todo

app.post("/todos", async (req, res) => {
  try {
    res.json(req.body);  
    // const { description } = req.body;
    // const newTodo = await pool.query(
    //     "INSERT INTO todos (description) VALUES ($1) RETURNING *",
    //     [description]
    // );

    // res.json(newTodo);

  } catch (err) {
    console.error(err.message);
  }
});

// update a todo

// delete a todo

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is starting on ${PORT}`);
});
