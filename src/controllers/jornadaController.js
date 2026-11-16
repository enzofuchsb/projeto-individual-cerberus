var jornadaModel = require("../models/jornadaModel");

function salvarPatrono(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var patrono = req.body.patronoServer;
    var pontosZeus = req.body.pontosZeusServer;
    var pontosPoseidon = req.body.pontosPoseidonServer;
    var pontosHades = req.body.pontosHadesServer;
    var pontosAtena = req.body.pontosAtenaServer;
    var pontosAres = req.body.pontosAresServer;
    var pontosApolo = req.body.pontosApoloServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (patrono == undefined) {
        res.status(400).send("Seu patrono está undefined!");
    } else if (pontosZeus == undefined || pontosPoseidon == undefined || pontosHades == undefined || pontosAtena == undefined || pontosAres == undefined || pontosApolo == undefined) {
        res.status(400).send("Os pontos do teste estão undefined!");
    } else {

        jornadaModel.salvarPatrono(idUsuario, patrono, pontosZeus, pontosPoseidon, pontosHades, pontosAtena, pontosAres, pontosApolo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao salvar o patrono! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrarTentativa(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var categoria = req.body.categoriaServer;
    var acertos = req.body.acertosServer;
    var total = req.body.totalServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("Sua categoria está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");
    } else if (total == undefined) {
        res.status(400).send("Seu total está undefined!");
    } else {

        jornadaModel.registrarTentativa(idUsuario, categoria, acertos, total)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao registrar a tentativa! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrarLeitura(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var historia = req.body.historiaServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (historia == undefined) {
        res.status(400).send("Sua história está undefined!");
    } else {

        jornadaModel.registrarLeitura(idUsuario, historia)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao registrar a leitura! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarDados(req, res) {
    var idUsuario = req.params.idUsuario;

    jornadaModel.buscarDados(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os dados do perfil: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarEvolucao(req, res) {
    var idUsuario = req.params.idUsuario;

    jornadaModel.buscarEvolucao(idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar a evolução dos quizzes: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    salvarPatrono,
    registrarTentativa,
    registrarLeitura,
    buscarDados,
    buscarEvolucao
}
