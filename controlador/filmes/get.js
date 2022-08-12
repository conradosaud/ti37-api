const { connection } = require("../../banco/banco.js");

exports.BuscaTodos = ( req, res ) => {

    const query = ` SELECT * FROM filmes ORDER BY id DESC ; `;
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}

exports.BuscaPorTitulo = ( req, res ) => {

    const titulo = req.params.titulo;

    const query = ` SELECT * FROM filmes WHERE titulo LIKE "%${ titulo }%"; `
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}   