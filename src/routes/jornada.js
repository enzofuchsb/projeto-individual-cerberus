var express = require("express");
var router = express.Router();

var jornadaController = require("../controllers/jornadaController");

router.post("/salvarPatrono", function (req, res) {
    jornadaController.salvarPatrono(req, res);
});

router.post("/registrarTentativa", function (req, res) {
    jornadaController.registrarTentativa(req, res);
});

router.post("/registrarLeitura", function (req, res) {
    jornadaController.registrarLeitura(req, res);
});

router.get("/buscarDados/:idUsuario", function (req, res) {
    jornadaController.buscarDados(req, res);
});

router.get("/buscarEvolucao/:idUsuario", function (req, res) {
    jornadaController.buscarEvolucao(req, res);
});

module.exports = router;
