const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const donations = require("./routes/api/donations");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.get("/", (req, res) => {
    res.send("Hello Sean!");
});

app.use("/api/users", users);
app.use("/api/donations", donations);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));