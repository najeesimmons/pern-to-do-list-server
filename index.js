const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors())

app.use(express.json) // => allows us to access the req.body

const PORT = 4000


app.listen(PORT, () => {
    console.log(`Server is starting on ${PORT}`)
});