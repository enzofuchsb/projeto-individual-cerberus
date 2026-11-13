var express = require("express");
var router = express.Router();

var jornadaController = require("../controllers/jornadaController");

// ===== GRAVAR =====
router.post("/patrono/salvar", function (req, res) {
    jornadaController.salvarPatrono(req, res);
});

router.post("/quiz/tentativa", function (req, res) {
    jornadaController.registrarTentativa(req, res);
});

router.post("/historia/leitura", function (req, res) {
    jornadaController.registrarLeitura(req, res);
});

// ===== BUSCAR PARA O PERFIL =====
// o ":idUsuario" é a parte da URL que muda (ex.: /perfil/dados/3)
router.get("/perfil/dados/:idUsuario", function (req, res) {
    jornadaController.buscarDados(req, res);
});

router.get("/perfil/evolucao/:idUsuario", function (req, res) {
    jornadaController.buscarEvolucao(req, res);
});

module.exports = router;
