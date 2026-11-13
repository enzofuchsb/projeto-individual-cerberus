// ===== DESAFIO DO GUARDIÃO =====
// As perguntas de todos os quizzes ficam no perguntas.js.
// A página de Quizzes guarda no sessionStorage qual quiz foi escolhido.
// Se ninguém escolheu, abre o de Olimpianos (que é público).
var chaveQuiz = sessionStorage.getItem('QUIZ_ESCOLHIDO');
// apaga a escolha, para o próximo quiz aberto pelo rodapé ser o padrão
sessionStorage.removeItem('QUIZ_ESCOLHIDO');

if (chaveQuiz == null) {
    chaveQuiz = 'olimpianos';
}

var quiz = bancoQuizzes[chaveQuiz];
nome_quiz.innerHTML = quiz.nome.toUpperCase();
nome_quiz_historia.innerHTML = quiz.nome.toUpperCase() + ' · LEIA COM ATENÇÃO';

// perguntas[0] combina com opcoes[0], certas[0] e explicacoes[0]
var perguntas = quiz.perguntas;
var opcoes = quiz.opcoes;
var certas = quiz.certas;
var explicacoes = quiz.explicacoes;

var atual = 0;
var acertos = 0;
var respondeu = false;


function mostrarPergunta() {
    respondeu = false;
    pergunta.innerHTML = perguntas[atual];
    contagem.innerHTML = (atual + 1) + ' de ' + perguntas.length;
    barra_progresso.style.width = (atual + 1) / perguntas.length * 100 + '%';
    resposta.style.display = 'none';

    var letras = ['A', 'B', 'C', 'D'];

    // TRECHO AVANÇADO: document.getElementById busca um elemento pelo id.
    // Aqui ele monta o id ('opcao_0', 'opcao_1'...) dentro do for.
    for (var i = 0; i < 4; i++) {
        var botao = document.getElementById('opcao_' + i);
        botao.innerHTML = '<span>' + letras[i] + '</span>' + opcoes[atual][i];
        botao.className = 'opcao-desafio';
    }
}


function responderPergunta(escolha) {
    if (respondeu == true) {
        return;
    }
    respondeu = true;

    var certa = certas[atual];
    document.getElementById('opcao_' + certa).className = 'opcao-desafio certa';

    if (escolha == certa) {
        acertos = acertos + 1;
        titulo_resposta.innerHTML = 'Acertou!';
    } else {
        document.getElementById('opcao_' + escolha).className = 'opcao-desafio errada';
        titulo_resposta.innerHTML = 'Não foi dessa vez. Era ' + opcoes[atual][certa] + '.';
    }

    texto_resposta.innerHTML = explicacoes[atual];

    if (atual == perguntas.length - 1) {
        botao_proxima.innerHTML = 'Ver resultado →';
    } else {
        botao_proxima.innerHTML = 'Próxima →';
    }

    resposta.style.display = 'grid';
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
    area_perguntas.style.display = 'none';
    resultado.style.display = 'flex';
    nota_final.innerHTML = acertos + ' de ' + perguntas.length;

    if (acertos == perguntas.length) {
        frase_final.innerHTML = 'Acertou tudo. Pode passar pelo portão: até eu abano o rabo.';
    } else if (acertos >= 3) {
        frase_final.innerHTML = 'Nada mal, viajante. Mais algumas histórias e ninguém te segura.';
    } else {
        frase_final.innerHTML = 'Os mitos ainda guardam segredos para você. Volte às histórias e tente de novo.';
    }

    salvarTentativa();
}


// só salva se a pessoa estiver logada
function salvarTentativa() {
    var idUsuario = sessionStorage.getItem('ID_USUARIO');

    if (idUsuario == null) {
        mensagem_salvo.innerHTML = 'Entre na sua conta para guardar suas notas e completar os 12 Trabalhos.';
        return;
    }

    // TRECHO AVANÇADO: fetch com POST envia o resultado para a API
    fetch('/quiz/tentativa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            categoriaServer: chaveQuiz,
            acertosServer: acertos,
            totalServer: perguntas.length
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            mensagem_salvo.innerHTML = 'Resultado guardado no seu perfil.';
        } else {
            mensagem_salvo.innerHTML = 'Não consegui guardar o resultado.';
        }
    });
}


function jogarDeNovo() {
    atual = 0;
    acertos = 0;
    mensagem_salvo.innerHTML = '';
    resultado.style.display = 'none';
    area_perguntas.style.display = 'flex';
    mostrarPergunta();
}


// sair do quiz: quem está logado volta para a lista de quizzes,
// quem não está volta para a página inicial
function sairDoQuiz() {
    if (sessionStorage.getItem('ID_USUARIO') == null) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'quizzes.html';
    }
}


// ===== HISTÓRIA ANTES DO QUIZ =====
// Cada parágrafo da história vira uma tag <p>.
function mostrarHistoria() {
    titulo_historia.innerHTML = quiz.tituloHistoria;

    var html = '';
    for (var i = 0; i < quiz.historia.length; i++) {
        html = html + '<p>' + quiz.historia[i] + '</p>';
    }
    texto_historia.innerHTML = html;
}


// esconde a história e mostra a primeira pergunta
function comecarQuiz() {
    area_historia.style.display = 'none';
    area_perguntas.style.display = 'flex';
    mostrarPergunta();
}


mostrarHistoria();
