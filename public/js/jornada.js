var listaDeuses = [
    { chave: "zeus", nome: "Zeus", imagem: "img/deuses/zeus.webp", quiz: "Raios de Zeus" },
    { chave: "poseidon", nome: "Poseidon", imagem: "img/deuses/poseidon.webp", quiz: "Mares de Poseidon" },
    { chave: "hades", nome: "Hades", imagem: "img/deuses/hades.webp", quiz: "Submundo de Hades" },
    { chave: "atena", nome: "Atena", imagem: "img/deuses/atena.webp", quiz: "Estratégias de Atena" },
    { chave: "ares", nome: "Ares", imagem: "", quiz: "Guerras de Ares" },
    { chave: "apolo", nome: "Apolo", imagem: "", quiz: "Oráculo de Apolo" }
];

var titulos = ["Mortal", "Herói", "Semideus", "Olimpiano"];

var totalHistorias = 31;

var listaQuizzes = [
    { chave: "olimpianos", nome: "Olimpianos", regra: "nada", aviso: "" },
    { chave: "herois", nome: "Heróis", regra: "nada", aviso: "" },
    { chave: "lugares", nome: "Lugares do Olimpo", regra: "nada", aviso: "" },
    { chave: "criaturas", nome: "Criaturas", regra: "nada", aviso: "" },
    { chave: "titas", nome: "Titãs", regra: "heroi", aviso: "Alcance o título Herói" },
    { chave: "patrono", nome: "Quiz do seu patrono", regra: "patrono", aviso: "Faça o Teste do Patrono" },
    { chave: "olimpo", nome: "Desafio do Olimpo", regra: "olimpiano", aviso: "Alcance o título Olimpiano" }
];

function buscarDeus(chave) {
    for (var i = 0; i < listaDeuses.length; i++) {
        if (listaDeuses[i].chave == chave) {
            return listaDeuses[i];
        }
    }
}

function montarAvatar(patrono) {
    if (patrono == null) {
        return "<img src='img/mini-cerberus.webp' alt=''>";
    }

    var deus = buscarDeus(patrono);

    if (deus.imagem == "") {
        return deus.nome;
    } else {
        return "<img src='" + deus.imagem + "' alt='" + deus.nome + "'>";
    }
}

function montarTrabalhos(dados) {
    var fezTeste = 0;
    if (dados.patrono != null) {
        fezTeste = 1;
    }

    var trabalhos = [
        { numero: "I", nome: "Leão de Nemeia", descricao: "Termine 1 quiz", atual: dados.quizzes, meta: 1 },
        { numero: "II", nome: "Hidra de Lerna", descricao: "Termine 3 quizzes", atual: dados.quizzes, meta: 3 },
        { numero: "III", nome: "Corça de Cerineia", descricao: "Leia 1 história do Arquivo", atual: dados.historias, meta: 1 },
        { numero: "IV", nome: "Javali de Erimanto", descricao: "Acerte tudo em 1 quiz", atual: dados.notasMaximas, meta: 1 },
        { numero: "V", nome: "Estábulos de Áugias", descricao: "Jogue 3 quizzes diferentes", atual: dados.categorias, meta: 3 },
        { numero: "VI", nome: "Aves do Estínfalo", descricao: "Termine 10 quizzes", atual: dados.quizzes, meta: 10 },
        { numero: "VII", nome: "Touro de Creta", descricao: "Faça o Teste do Patrono", atual: fezTeste, meta: 1 },
        { numero: "VIII", nome: "Éguas de Diomedes", descricao: "Leia 10 histórias do Arquivo", atual: dados.historias, meta: 10 },
        { numero: "IX", nome: "Cinturão de Hipólita", descricao: "Tenha média de 70% ou mais", atual: dados.media, meta: 70 },
        { numero: "X", nome: "Gado de Gerião", descricao: "Termine 25 quizzes", atual: dados.quizzes, meta: 25 },
        { numero: "XI", nome: "Pomos das Hespérides", descricao: "Acerte tudo em 5 quizzes", atual: dados.notasMaximas, meta: 5 }
    ];

    var completos = contarCompletos(trabalhos);

    trabalhos.push({ numero: "XII", nome: "Captura de Cérbero", descricao: "Complete os outros 11 trabalhos", atual: completos, meta: 11 });

    return trabalhos;
}

function contarCompletos(trabalhos) {
    var completos = 0;

    for (var i = 0; i < trabalhos.length; i++) {
        if (trabalhos[i].atual >= trabalhos[i].meta) {
            completos = completos + 1;
        }
    }

    return completos;
}

function descobrirNivel(completos) {
    if (completos == 12) {
        return 3;
    } else if (completos >= 8) {
        return 2;
    } else if (completos >= 4) {
        return 1;
    } else {
        return 0;
    }
}

function estaLiberado(regra, nivel, patrono) {
    if (regra == "heroi") {
        return nivel >= 1;
    } else if (regra == "patrono") {
        return patrono != null;
    } else if (regra == "olimpiano") {
        return nivel == 3;
    } else {
        return true;
    }
}

function montarCartoesQuizzes(nivel, patrono) {
    var html = "";

    for (var i = 0; i < listaQuizzes.length; i++) {
        var nome = listaQuizzes[i].nome;
        var chave = listaQuizzes[i].chave;

        if (chave == "patrono" && patrono != null) {
            nome = buscarDeus(patrono).quiz;
            chave = patrono;
        }

        if (estaLiberado(listaQuizzes[i].regra, nivel, patrono)) {
            html = html +
                "<button class='cartao-quiz' onclick='abrirQuiz(\"" + chave + "\")'>" +
                "<h3>" + nome + "</h3>" +
                "<span class='status'>Jogar →</span>" +
                "</button>";
        } else {
            html = html +
                "<div class='cartao-quiz quiz-bloqueado'>" +
                "<h3>" + nome + "</h3>" +
                "<span class='status'>🔒 " + listaQuizzes[i].aviso + "</span>" +
                "</div>";
        }
    }

    return html;
}

function abrirQuiz(chave) {
    sessionStorage.QUIZ_ESCOLHIDO = chave;
    window.location = "desafio.html";
}
