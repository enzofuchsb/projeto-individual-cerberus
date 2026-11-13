var jornadaModel = require("../models/jornadaModel");

// ===== GRAVAR =====

function salvarPatrono(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var patrono = req.body.patronoServer;
    var pontos = req.body.pontosServer;

    if (idUsuario == undefined || patrono == undefined || pontos == undefined) {
        res.status(400).send("Faltam dados do teste!");
    } else {
        jornadaModel.salvarPatrono(idUsuario, patrono, pontos)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function registrarTentativa(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var categoria = req.body.categoriaServer;
    var acertos = req.body.acertosServer;
    var total = req.body.totalServer;

    if (idUsuario == undefined || categoria == undefined || acertos == undefined || total == undefined) {
        res.status(400).send("Faltam dados do quiz!");
    } else {
        jornadaModel.registrarTentativa(idUsuario, categoria, acertos, total)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function registrarLeitura(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var historia = req.body.historiaServer;

    if (idUsuario == undefined || historia == undefined) {
        res.status(400).send("Faltou o usuário ou a história!");
    } else {
        jornadaModel.registrarLeitura(idUsuario, historia)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


// ===== BUSCAR PARA O PERFIL =====

function buscarDados(req, res) {
    jornadaModel.buscarDados(req.params.idUsuario)
        .then(function (resultado) {
            // a consulta devolve uma lista com uma linha só
            res.json(resultado[0]);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarEvolucao(req, res) {
    jornadaModel.buscarEvolucao(req.params.idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvarPatrono,
    registrarTentativa,
    registrarLeitura,
    buscarDados,
    buscarEvolucao
};
