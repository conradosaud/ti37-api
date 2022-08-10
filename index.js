// CONEXÃO DO EXPRESS
const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// CONEXÃO DO BANCO MYSQL
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senac',
  database: 'conradito_filmes'
});




// ROTAS DO EXPRESS


app.delete('/filmes/:id', (req, res) => {

    const id = req.params.id;

    connection.query(
        ` DELETE FROM filmes WHERE id = ${id}; `,
        function(err, results, fields) {
            console.log(results);
            console.log(fields);

            res.send( results );

        }
    );

})

app.post('/filmes', (req, res) => {

    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;

    connection.query(
        ` INSERT INTO filmes ( titulo, sinopse ) VALUES ( "${titulo}" , "${sinopse}"  ); `,
        function(err, results, fields) {
            //console.log(results);
            //console.log(fields);

            res.send( results );

        }
    );

})

app.post('/usuarios', (req, res) => {

    const usuario = req.body.usuario;
    const nome = req.body.nome;
    const senha = req.body.senha;

    connection.query(
        ` INSERT INTO usuarios ( usuario, nome, senha ) VALUES ( "${usuario}", "${nome}" , "${senha}"  ); `,
        function(err, results, fields) {
            //console.log(results);
            //console.log(fields);

            res.send( results );

        }
    );

})

app.post('/usuarios/autentica', (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    connection.query(
        ` SELECT id, nome FROM usuarios WHERE usuario = "${usuario}" AND senha = "${senha}" ; `,
        function(err, results, fields) {
            //console.log(results);
            //console.log(fields);

            res.send( results );

        }
    );

})

app.get('/filmes', (req, res) => {

    connection.query(
        ' SELECT * FROM filmes ORDER BY id DESC ; ',
        function(err, results, fields) {
            //console.log(results);
            //console.log(fields);

            res.send( results );

        }
    );


})

app.get('/busca_filmes/:titulo', (req, res) => {

    const titulo = req.params.titulo;

    connection.query(
        ` SELECT * FROM filmes WHERE titulo LIKE "%${ titulo }%"; `,
        function(err, results, fields) {
            //console.log(results);
            //console.log(fields);

            res.send( results );

        }
    );


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})