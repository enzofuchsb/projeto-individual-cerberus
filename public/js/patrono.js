var perguntas = [
    "Numa discussão, o que você faz?",
    "Onde você se sente em casa?",
    "Como seus amigos te descrevem?",
    "Qual presente você gostaria de ganhar?",
    "Se pudesse ter um poder, qual seria?"
];

var opcoes = [
    ["Dou a palavra final e encerro o assunto", "Penso num plano antes de responder", "Parto para cima sem pensar duas vezes", "Fico calmo... até a maré virar"],
    ["No alto de uma montanha", "Na beira do mar", "Num lugar silencioso e escondido", "Num palco, com música"],
    ["Justo e reservado", "A pessoa mais inteligente do grupo", "Calmo num dia, tempestade no outro", "Corajoso, às vezes até demais"],
    ["Um livro raro", "Um instrumento musical", "Uma joia tirada das profundezas da terra", "Uma espada de verdade"],
    ["Controlar os raios", "Ver o futuro", "Falar com os mortos", "Nunca perder uma batalha"]
];

var deusDasOpcoes = [
    ["zeus", "atena", "ares", "poseidon"],
    ["zeus", "poseidon", "hades", "apolo"],
    ["hades", "atena", "poseidon", "ares"],
    ["atena", "apolo", "hades", "ares"],
    ["zeus", "apolo", "hades", "ares"]
];

var pontosZeus = 0;
var pontosPoseidon = 0;
var pontosHades = 0;
var pontosAtena = 0;
var pontosAres = 0;
var pontosApolo = 0;

var atual = 0;
var patrono = "";

function mostrarPergunta() {
    contagem_teste.innerHTML = "Pergunta " + (atual + 1) + " de " + perguntas.length;
    pergunta_teste.innerHTML = perguntas[atual];

    for (var i = 0; i < 4; i++) {
        document.getElementById("opcao_" + i).innerHTML = opcoes[atual][i];
    }
}

function escolher(numeroOpcao) {
    var deus = deusDasOpcoes[atual][numeroOpcao];

    if (deus == "zeus") {
        pontosZeus = pontosZeus + 1;
    } else if (deus == "poseidon") {
        pontosPoseidon = pontosPoseidon + 1;
    } else if (deus == "hades") {
        pontosHades = pontosHades + 1;
    } else if (deus == "atena") {
        pontosAtena = pontosAtena + 1;
    } else if (deus == "ares") {
        pontosAres = pontosAres + 1;
    } else {
        pontosApolo = pontosApolo + 1;
    }

    atual = atual + 1;

    if (atual == perguntas.length) {
        mostrarResultado();
    } else {
        mostrarPergunta();
    }
}

function descobrirPatrono() {
    var maior = "zeus";
    var maiorPontos = pontosZeus;

    if (pontosPoseidon > maiorPontos) {
        maior = "poseidon";
        maiorPontos = pontosPoseidon;
    }
    if (pontosHades > maiorPontos) {
        maior = "hades";
        maiorPontos = pontosHades;
    }
    if (pontosAtena > maiorPontos) {
        maior = "atena";
        maiorPontos = pontosAtena;
    }
    if (pontosAres > maiorPontos) {
        maior = "ares";
        maiorPontos = pontosAres;
    }
    if (pontosApolo > maiorPontos) {
        maior = "apolo";
        maiorPontos = pontosApolo;
    }

    return maior;
}

function buscarFrase(deus) {
    if (deus == "zeus") {
        return "O senhor do Olimpo. Você nasceu para liderar, e todos sabem quando você chega.";
    } else if (deus == "poseidon") {
        return "O senhor dos mares. Calmo como a água parada, forte como uma onda.";
    } else if (deus == "hades") {
        return "O senhor do Submundo, e meu dono. Você é justo, discreto e não esquece nada.";
    } else if (deus == "atena") {
        return "A deusa da sabedoria. Você vence pela cabeça, não pela força.";
    } else if (deus == "ares") {
        return "O deus da guerra. Coragem não te falta, só paciência.";
    } else {
        return "O deus da música, da luz e das profecias. Você enxerga o que os outros não veem.";
    }
}

function mostrarResultado() {
    patrono = descobrirPatrono();

    area_teste.style.display = "none";
    resultado_teste.style.display = "block";

    avatar_resultado.innerHTML = montarAvatar(patrono);
    nome_patrono.innerHTML = buscarDeus(patrono).nome;
    frase_patrono.innerHTML = buscarFrase(patrono);
    mensagem_salvar.innerHTML = "";
}

function salvarPatrono() {
    fetch("/jornada/salvarPatrono", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO,
            patronoServer: patrono,
            pontosZeusServer: pontosZeus,
            pontosPoseidonServer: pontosPoseidon,
            pontosHadesServer: pontosHades,
            pontosAtenaServer: pontosAtena,
            pontosAresServer: pontosAres,
            pontosApoloServer: pontosApolo
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            mensagem_salvar.innerHTML = "Salvo! " + buscarDeus(patrono).nome + " agora olha por você. Veja no seu perfil.";
        } else {
            console.log("Houve um erro ao tentar salvar o patrono!");
            mensagem_salvar.innerHTML = "Não consegui salvar. Tente de novo.";
        }
    }).catch(function (erro) {
        console.log(erro);
        mensagem_salvar.innerHTML = "Não consegui salvar. Tente de novo.";
    });

    return false;
}

function refazerTeste() {
    pontosZeus = 0;
    pontosPoseidon = 0;
    pontosHades = 0;
    pontosAtena = 0;
    pontosAres = 0;
    pontosApolo = 0;
    atual = 0;

    resultado_teste.style.display = "none";
    area_teste.style.display = "block";
    mostrarPergunta();
}

validarSessao();
mostrarPergunta();
