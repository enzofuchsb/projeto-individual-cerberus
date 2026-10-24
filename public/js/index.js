// ===== DESAFIO DO GUARDIÃO =====
var tentativas = 0;

function responder(resposta) {
    tentativas = tentativas + 1;

    if (resposta == 'Poseidon' && tentativas == 1) {
        mensagem_desafio.innerHTML = 'Acertou de primeira! Poseidon governa os mares.';
    } else if (resposta == 'Poseidon') {
        mensagem_desafio.innerHTML = 'Acertou depois de ' + tentativas + ' tentativas.';
    } else if (resposta == 'Zeus') {
        mensagem_desafio.innerHTML = 'Errado. Zeus reina no céu, não no mar.';
    } else {
        mensagem_desafio.innerHTML = 'Errado. ' + resposta + ' não manda nas águas.';
    }
}


// ===== PORTÃO: O CERBERUS PERGUNTA O NOME =====
function atravessar() {
    var nome = input_nome.value;

    if (nome == '') {
        mensagem_portao.innerHTML = 'Nenhuma alma passa sem dizer seu nome.';
    } else {
        var uivos = '';

        // uma vez para cada cabeça
        for (var cabeca = 1; cabeca <= 3; cabeca++) {
            uivos = uivos + 'Auuu! ';
        }

        mensagem_portao.innerHTML = uivos + 'Bem-vindo, ' + nome + '. O portão está aberto.';
    }
}


// ===== OS DOZE TRABALHOS DE HÉRACLES =====
function contarTrabalhos() {
    var trabalho = 1;
    var texto = '';

    while (trabalho <= 12) {
        if (trabalho == 12) {
            texto = texto + trabalho + ' (eu!)';
        } else {
            texto = texto + trabalho + ', ';
        }
        trabalho = trabalho + 1;
    }

    lista_trabalhos.innerHTML = 'Trabalhos: ' + texto;
    animarContador();
}


// ===== TRECHO AVANÇADO 1: contador animado =====
// setInterval repete uma função de tempos em tempos (aqui, a cada 150 milissegundos).
// clearInterval para a repetição quando o número chega em 12.
var intervalo;
var numeroAtual = 0;

function animarContador() {
    numeroAtual = 0;
    clearInterval(intervalo);

    intervalo = setInterval(function () {
        numeroAtual = numeroAtual + 1;
        contador_trabalhos.innerHTML = numeroAtual;

        if (numeroAtual == 12) {
            clearInterval(intervalo);
            contador_trabalhos.innerHTML = 'XII';
        }
    }, 150);
}


// ===== TRECHO AVANÇADO 2: frase aleatória no título =====
// Um vetor (array) guarda várias frases numa variável só.
// Math.random() sorteia um número entre 0 e 1; multiplicado pelo tamanho
// do vetor e arredondado com Math.floor, vira uma posição válida do vetor.
var frases = [
    'Nenhuma alma passa sem que eu saiba seu nome.',
    'Três cabeças, mil histórias para contar.',
    'Do Olimpo ao Tártaro, eu conheço o caminho.'
];

var sorteio = Math.floor(Math.random() * frases.length);
titulo_hero.innerHTML = frases[sorteio];


// ===== MINI CERBERUS =====
// A cada clique ele fala a próxima frase da lista. Depois da última, volta para a primeira.
var falas = [
    'Au Au Auuuu!',
    'Eu tenho três cabeças, mas só um rabo.',
    'Guardo os portões do Hades há milênios.',
    'Héracles foi o único que me levou para passear.',
    'Orfeu me fez dormir com a música dele. Que vergonha.',
    'Cada cabeça minha prefere um petisco diferente.'
];
var numeroFala = 0;

function falarCerberus() {
    fala_cerberus.innerHTML = falas[numeroFala];
    numeroFala = numeroFala + 1;

    if (numeroFala == falas.length) {
        numeroFala = 0;
    }
}
