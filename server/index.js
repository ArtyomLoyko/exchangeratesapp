const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: '../.env'
})

app.use(express.static(path.join(__dirname, '../client/build')))

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/auth", require("./routes/auth"));
app.use("/converter", require("./routes/converter"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is starting on port ${process.env.PORT || 4000}`);
});
