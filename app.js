const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/index.html"));
});

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/css/main.css"));
});

app.get("/script.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/js/main.js"));
});

//Hanfle 404 error
// app.use((req, res) => {
//     res.send("Internal error");
// });

//
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
