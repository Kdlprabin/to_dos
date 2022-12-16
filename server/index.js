const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Chitwannepal#4',
    database : 'todos'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/post', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const happened_date = req.happened_date;
    const if_done = req.body.if_done;
    const sqlInsert = "INSERT INTO Todos(title,description,happened_date,if_done) VALUES(?,?,?,?);"
    db.query(sqlInsert,title,description,happened_date,if_done);
})

app.listen(3001,() =>{
    console.log("running on post 3001")
})