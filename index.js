const express = require("express")

const app = express()


app.use(express.json());


function add(a, b) {
  return a + b;
}

app.get("/name", (req, res) => {
  return res.json("hii there")
})

app.get("/cal", (req, res) => {

})

module.exports = add;
app.listen(3000)
