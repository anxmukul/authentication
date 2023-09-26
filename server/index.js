const express = require('express');
const app = express();
const { Client } = require('pg');
const cors = require("cors")
app.use(express.json());
app.use(cors());

const port = 3001;

app.get("/", (req, res) => {
    res.send("This is a express server");
})

app.post("/register", (req, res) => {
    const username = req.body.userName
    const email = req.body.emailId
    const password = req.body.password
    var insertQuery = `insert into usersinfo (username, emailid, password) VALUES ('${username}', '${email}', '${password}') returning username, id`
    client.query(insertQuery, (err, result) => {
        if (err) {
            console.log("failure", err);
        } else {
            res.send(result);
        }
    })
})

app.get('/allUser', (req, res) => {
    var selectquery = 'select * from usersinfo';
    client.query(selectquery, (err, result) => {
        if (err) {
            res.send(err.message || err);
        }
        else {
            res.send(result.rows);
        }
    })
})

const client = new Client({
    user: process.env.user,
    host: process.env.hostName,
    database: process.env.dataBase || "users",
    password: process.env.passWord || "blah",
    port: process.env.portNumber,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect((err) => {
    if (err) {
        Exit(1);
        throw err;
    }
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);

    })
});
