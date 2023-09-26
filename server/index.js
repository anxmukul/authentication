const express = require('express');
const app = express();
const { Client } = require('pg');
const port = 3001;


app.get("/", (req, res) => {
    res.send("This is a express server");
})

app.get('/allUser', (req, res) => {
    var selectquery = 'select * from usersinfo';
    client.query(selectquery, (err, result) => {
        if(err){
            res.send(err.message || err);
        }
        else{
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
