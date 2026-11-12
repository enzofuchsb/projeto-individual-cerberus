// ===== DESAFIO DO GUARDIÃO =====
// Cada pergunta usa a mesma posição nos vetores:
// perguntas[0] combina com opcoes[0], certas[0] e explicacoes[0].
var perguntas = [
    'Quem é a deusa da sabedoria e da estratégia?',
    'Qual herói me levou para fora do Submundo no último dos doze trabalhos?',
    'Quem leva as almas na barca para atravessar o rio do Submundo?',
    'Que fruto prendeu Perséfone ao Submundo?',
    'Quantas cabeças Hesíodo deu ao Cérbero na Teogonia?'
];

// um vetor dentro de outro: as 4 opções de cada pergunta
var opcoes = [
    ['Atena', 'Hera', 'Afrodite', 'Deméter'],
    ['Perseu', 'Teseu', 'Héracles', 'Odisseu'],
    ['Hermes', 'Caronte', 'Orfeu', 'Tânato'],
    ['Uva', 'Figo', 'Maçã', 'Romã'],
    ['Três', 'Cinquenta', 'Cem', 'Uma']
];

// posição da opção certa (0 = A, 1 = B, 2 = C, 3 = D)
var certas = [0, 2, 1, 3, 1];

var explicacoes = [
    'Atena nasceu da cabeça de Zeus, já adulta e armada.',
    'Héracles me venceu sem armas, como Hades exigiu.',
    'Hermes guia as almas até a margem, mas quem as leva na barca é Caronte.',
    'Ela comeu uma semente de romã e, por isso, passa parte do ano com Hades.',
    'Hesíodo fala em cinquenta. As três cabeças vêm de outros autores e da arte grega.'
];

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
}


function jogarDeNovo() {
    atual = 0;
    acertos = 0;
    resultado.style.display = 'none';
    area_perguntas.style.display = 'flex';
    mostrarPergunta();
}


mostrarPergunta();
