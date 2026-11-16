var chaveQuiz = sessionStorage.QUIZ_ESCOLHIDO;
sessionStorage.removeItem("QUIZ_ESCOLHIDO");

if (chaveQuiz == undefined) {
    chaveQuiz = "olimpianos";
}

var quiz = buscarQuiz(chaveQuiz);

var perguntas = quiz.perguntas;
var opcoes = quiz.opcoes;
var certas = quiz.certas;
var explicacoes = quiz.explicacoes;

var atual = 0;
var acertos = 0;
var respondeu = false;

function buscarQuiz(chave) {
    for (var i = 0; i < bancoQuizzes.length; i++) {
        if (bancoQuizzes[i].chave == chave) {
            return bancoQuizzes[i];
        }
    }
}

function mostrarHistoria() {
    nome_quiz.innerHTML = quiz.nome.toUpperCase();
    nome_quiz_historia.innerHTML = quiz.nome.toUpperCase() + " · LEIA COM ATENÇÃO";
    titulo_historia.innerHTML = quiz.tituloHistoria;

    var html = "";

    for (var i = 0; i < quiz.historia.length; i++) {
        html = html + "<p>" + quiz.historia[i] + "</p>";
    }

    texto_historia.innerHTML = html;
}

function comecarQuiz() {
    area_historia.style.display = "none";
    area_perguntas.style.display = "flex";
    mostrarPergunta();
}

function mostrarPergunta() {
    respondeu = false;
    pergunta.innerHTML = perguntas[atual];
    contagem.innerHTML = (atual + 1) + " de " + perguntas.length;
    barra_progresso.style.width = (atual + 1) / perguntas.length * 100 + "%";
    resposta.style.display = "none";

    var letras = ["A", "B", "C", "D"];

    for (var i = 0; i < 4; i++) {
        var botao = document.getElementById("opcao_" + i);
        botao.innerHTML = "<span>" + letras[i] + "</span>" + opcoes[atual][i];
        botao.className = "opcao-desafio";
    }
}

function responderPergunta(escolha) {
    if (respondeu == true) {
        return;
    }
    respondeu = true;

    var certa = certas[atual];
    document.getElementById("opcao_" + certa).className = "opcao-desafio certa";

    if (escolha == certa) {
        acertos = acertos + 1;
        titulo_resposta.innerHTML = "Acertou!";
    } else {
        document.getElementById("opcao_" + escolha).className = "opcao-desafio errada";
        titulo_resposta.innerHTML = "Não foi dessa vez. Era " + opcoes[atual][certa] + ".";
    }

    texto_resposta.innerHTML = explicacoes[atual];

    if (atual == perguntas.length - 1) {
        botao_proxima.innerHTML = "Ver resultado →";
    } else {
        botao_proxima.innerHTML = "Próxima →";
    }

    resposta.style.display = "grid";
}

function proximaPergunta() {
    atual = atual + 1;

    if (atual == perguntas.length) {
        mostrarResultado();
    } else {
        mostrarPergunta();
    }
}

function mostrarResultado() {
    area_perguntas.style.display = "none";
    resultado.style.display = "flex";
    nota_final.innerHTML = acertos + " de " + perguntas.length;

    if (acertos == perguntas.length) {
        frase_final.innerHTML = "Acertou tudo. Pode passar pelo portão: até eu abano o rabo.";
    } else if (acertos >= 3) {
        frase_final.innerHTML = "Nada mal, viajante. Mais algumas histórias e ninguém te segura.";
    } else {
        frase_final.innerHTML = "Os mitos ainda guardam segredos para você. Volte às histórias e tente de novo.";
    }

    registrarTentativa();
}

function registrarTentativa() {
    var idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
        mensagem_salvo.innerHTML = "Entre na sua conta para guardar suas notas e completar os 12 Trabalhos.";
        return false;
    }

    fetch("/jornada/registrarTentativa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            categoriaServer: chaveQuiz,
            acertosServer: acertos,
            totalServer: perguntas.length
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            mensagem_salvo.innerHTML = "Resultado guardado no seu perfil.";
        } else {
            console.log("Houve um erro ao tentar guardar o resultado!");
            mensagem_salvo.innerHTML = "Não consegui guardar o resultado.";
        }
    }).catch(function (erro) {
        console.log(erro);
        mensagem_salvo.innerHTML = "Não consegui guardar o resultado.";
    });

    return false;
}

function jogarDeNovo() {
    atual = 0;
    acertos = 0;
    mensagem_salvo.innerHTML = "";
    resultado.style.display = "none";
    area_perguntas.style.display = "flex";
    mostrarPergunta();
}

function sairDoQuiz() {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location = "index.html";
    } else {
        window.location = "quizzes.html";
    }
}

mostrarHistoria();
