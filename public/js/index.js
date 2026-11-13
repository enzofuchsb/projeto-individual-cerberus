// ===== DESAFIO RÁPIDO =====
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


// ===== TRECHO AVANÇADO: frase aleatória no título =====
// Um vetor (array) guarda várias frases numa variável só.
// Math.random() sorteia um número entre 0 e 1; multiplicado pelo tamanho
// do vetor e arredondado com Math.floor, vira uma posição válida do vetor.
// A tag <em> deixa o final da frase em âmbar.
var frases = [
    'Nenhuma alma passa sem que eu saiba <em>seu nome.</em>',
    'Três cabeças, <em>mil histórias</em> para contar.',
    'Do Olimpo ao Tártaro, <em>eu conheço o caminho.</em>'
];

var sorteio = Math.floor(Math.random() * frases.length);
titulo_hero.innerHTML = frases[sorteio];


// ===== QUEM JÁ ENTROU NÃO PRECISA DO CONVITE PARA CRIAR CONTA =====
if (sessionStorage.getItem('ID_USUARIO') != null) {
    bloco_login.style.display = 'none';
}
