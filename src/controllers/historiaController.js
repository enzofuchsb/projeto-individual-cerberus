var historiaModel = require("../models/historiaModel");

function responder(promessa, res) {
    promessa.then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log("Erro no banco: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarEstado(req, res) {
    var idUsuario = req.params.idUsuario;
    var idHistoria = req.params.idHistoria;
    responder(historiaModel.buscarEstado(idUsuario, idHistoria), res);
}

function marcarLeitura(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;

    if (idUsuario == undefined || idHistoria == undefined) {
        res.status(400).send("Usuário ou história indefinidos!");
    } else {
        responder(historiaModel.marcarLeitura(idUsuario, idHistoria), res);
    }
}

function avaliar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;
    var nota = req.body.notaServer;

    if (nota < 1 || nota > 5) {
        res.status(400).send("A nota precisa ser de 1 a 5!");
    } else {
        responder(historiaModel.avaliar(idUsuario, idHistoria, nota), res);
    }
}

function favoritar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;
    responder(historiaModel.favoritar(idUsuario, idHistoria), res);
}

function desfavoritar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;
    responder(historiaModel.desfavoritar(idUsuario, idHistoria), res);
}

function buscarResumo(req, res) {
    responder(historiaModel.buscarResumo(req.params.idUsuario), res);
}

function buscarPorCategoria(req, res) {
    responder(historiaModel.buscarPorCategoria(req.params.idUsuario), res);
}

function buscarMaisBemAvaliadas(req, res) {
    responder(historiaModel.buscarMaisBemAvaliadas(), res);
}

function buscarFavoritos(req, res) {
    responder(historiaModel.buscarFavoritos(req.params.idUsuario), res);
}

module.exports = {
    buscarEstado,
    marcarLeitura,
    avaliar,
    favoritar,
    desfavoritar,
    buscarResumo,
    buscarPorCategoria,
    buscarMaisBemAvaliadas,
    buscarFavoritos
};
