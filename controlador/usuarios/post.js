const { connection } = require("../../banco/banco.js");

exports.Insere = ( req, res ) => {

    const usuario = req.body.usuario;
    const nome = req.body.nome;
    const senha = req.body.senha;

    const query = ` INSERT INTO usuarios ( usuario, nome, senha ) VALUES ( "${usuario}", "${nome}" , "${senha}"  ); `;
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}

exports.Autentica = ( req, res ) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const query = ` SELECT id, nome FROM usuarios WHERE usuario = "${usuario}" AND senha = "${senha}" ; `
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}