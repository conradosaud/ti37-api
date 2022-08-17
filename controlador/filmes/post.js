const { connection } = require("../../banco/banco.js");

exports.Insere = ( req, res ) => {

    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;

    const query = ` INSERT INTO filmes ( titulo, sinopse ) VALUES ( "${titulo}" , "${sinopse}"  ); `;
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}