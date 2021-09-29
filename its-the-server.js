const express = require("express");
const app = express();
const smashsub = require('./routers/smash-sub.js');

// Start middleware pipeline (HTTP request goes in).

app.use((req, res, next) => {
    req.specialMessage = "Hello :)";
    next();
});

app.use(express.json());

app.get("/smash", (smashsub))

app.get("/", (req, res) => {
    res.send(req.specialMessage);
});
app.post("/", (req, res) => {
    res.send(req.specialMessage);
});

// End middleware pipeline.

const PORT = 8080;
app.listen(PORT, () => {
    console.log(
`
This process is now officially listening for HTTP messages!
It is listening for those signals on port ${PORT}. :)
Happy requesting!
`
    );
});


