const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune } = require('./controller');

app.get('/api/fortune', getFortune);
app.get("/api/compliment", getCompliment);

app.listen(5500, () => console.log("Server running on 5500"));
