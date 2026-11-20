var historiaModel = require("../models/historiaModel");

// Envia o resultado do banco como JSON, ou o erro com status 500
function responder(promessa, res) {
    promessa.then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log("Erro no banco: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Se o usuário leu, a nota e se favoritou uma história
function buscarEstado(req, res) {
    var idUsuario = req.params.idUsuario;
    var idHistoria = req.params.idHistoria;
    responder(historiaModel.buscarEstado(idUsuario, idHistoria), res);
}

// Grava que o usuário leu a história
function marcarLeitura(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;

    if (idUsuario == undefined || idHistoria == undefined) {
        res.status(400).send("Usuário ou história indefinidos!");
    } else {
        responder(historiaModel.marcarLeitura(idUsuario, idHistoria), res);
    }
}

// Grava a nota (1 a 5) que o usuário deu
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

// Adiciona a história aos favoritos
function favoritar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;
    responder(historiaModel.favoritar(idUsuario, idHistoria), res);
}

// Tira a história dos favoritos
function desfavoritar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idHistoria = req.body.idHistoriaServer;
    responder(historiaModel.desfavoritar(idUsuario, idHistoria), res);
}

// Os 3 números do perfil
function buscarResumo(req, res) {
    responder(historiaModel.buscarResumo(req.params.idUsuario), res);
}

// Lidas por categoria (gráfico de rosca)
function buscarPorCategoria(req, res) {
    responder(historiaModel.buscarPorCategoria(req.params.idUsuario), res);
}

// As 5 mais bem avaliadas do site (gráfico de barras)
function buscarMaisBemAvaliadas(req, res) {
    responder(historiaModel.buscarMaisBemAvaliadas(), res);
}

// Lista de favoritos do usuário
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
