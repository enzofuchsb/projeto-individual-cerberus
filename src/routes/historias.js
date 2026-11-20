var express = require("express");
var router = express.Router();

var historiaController = require("../controllers/historiaController");

// Páginas de história
router.get("/estado/:idUsuario/:idHistoria", function (req, res) {
    historiaController.buscarEstado(req, res);
});

router.post("/ler", function (req, res) {
    historiaController.marcarLeitura(req, res);
});

router.put("/avaliar", function (req, res) {
    historiaController.avaliar(req, res);
});

router.post("/favoritar", function (req, res) {
    historiaController.favoritar(req, res);
});

router.delete("/desfavoritar", function (req, res) {
    historiaController.desfavoritar(req, res);
});

// Perfil "Minha Jornada"
router.get("/resumo/:idUsuario", function (req, res) {
    historiaController.buscarResumo(req, res);
});

router.get("/porCategoria/:idUsuario", function (req, res) {
    historiaController.buscarPorCategoria(req, res);
});

router.get("/maisBemAvaliadas", function (req, res) {
    historiaController.buscarMaisBemAvaliadas(req, res);
});

router.get("/favoritos/:idUsuario", function (req, res) {
    historiaController.buscarFavoritos(req, res);
});

module.exports = router;
