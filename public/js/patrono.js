// ===== TESTE DO DEUS PATRONO =====
// Cada opção dá +1 ponto para um deus.
// perguntas[0] combina com opcoes[0] e com deusDasOpcoes[0].
var perguntas = [
    'Numa discussão, o que você faz?',
    'Onde você se sente em casa?',
    'Como seus amigos te descrevem?',
    'Qual presente você gostaria de ganhar?',
    'Se pudesse ter um poder, qual seria?'
];

var opcoes = [
    ['Dou a palavra final e encerro o assunto', 'Penso num plano antes de responder', 'Parto para cima sem pensar duas vezes', 'Fico calmo... até a maré virar'],
    ['No alto de uma montanha', 'Na beira do mar', 'Num lugar silencioso e escondido', 'Num palco, com música'],
    ['Justo e reservado', 'A pessoa mais inteligente do grupo', 'Calmo num dia, tempestade no outro', 'Corajoso, às vezes até demais'],
    ['Um livro raro', 'Um instrumento musical', 'Uma joia tirada das profundezas da terra', 'Uma espada de verdade'],
    ['Controlar os raios', 'Ver o futuro', 'Falar com os mortos', 'Nunca perder uma batalha']
];

var deusDasOpcoes = [
    ['zeus', 'atena', 'ares', 'poseidon'],
    ['zeus', 'poseidon', 'hades', 'apolo'],
    ['hades', 'atena', 'poseidon', 'ares'],
    ['atena', 'apolo', 'hades', 'ares'],
    ['zeus', 'apolo', 'hades', 'ares']
];

var frases = {
    zeus: 'O senhor do Olimpo. Você nasceu para liderar, e todos sabem quando você chega.',
    poseidon: 'O senhor dos mares. Calmo como a água parada, forte como uma onda.',
    hades: 'O senhor do Submundo, e meu dono. Você é justo, discreto e não esquece nada.',
    atena: 'A deusa da sabedoria. Você vence pela cabeça, não pela força.',
    ares: 'O deus da guerra. Coragem não te falta, só paciência.',
    apolo: 'O deus da música, da luz e das profecias. Você enxerga o que os outros não veem.'
};

// os pontos começam zerados
var pontos = { zeus: 0, poseidon: 0, hades: 0, atena: 0, ares: 0, apolo: 0 };
var atual = 0;
var patrono = '';


function mostrarPergunta() {
    contagem_teste.innerHTML = 'Pergunta ' + (atual + 1) + ' de ' + perguntas.length;
    pergunta_teste.innerHTML = perguntas[atual];

    for (var i = 0; i < 4; i++) {
        document.getElementById('opcao_' + i).innerHTML = opcoes[atual][i];
    }
}


function escolher(numeroOpcao) {
    var deus = deusDasOpcoes[atual][numeroOpcao];
    pontos[deus] = pontos[deus] + 1;

    atual = atual + 1;

    if (atual == perguntas.length) {
        mostrarResultado();
    } else {
        mostrarPergunta();
    }
}


// for...in passa por cada deus do objeto pontos.
// Só troca quando é MAIOR, então no empate fica o primeiro.
function descobrirPatrono() {
    var maior = 'zeus';

    for (var deus in pontos) {
        if (pontos[deus] > pontos[maior]) {
            maior = deus;
        }
    }
    return maior;
}


function mostrarResultado() {
    patrono = descobrirPatrono();

    area_teste.style.display = 'none';
    resultado_teste.style.display = 'block';

    avatar_resultado.innerHTML = montarAvatar(patrono);
    nome_patrono.innerHTML = deuses[patrono].nome;
    frase_patrono.innerHTML = frases[patrono];
    mensagem_salvar.innerHTML = '';
}


function salvarPatrono() {
    // TRECHO AVANÇADO: fetch com POST envia os pontos para a API.
    // JSON.stringify transforma o objeto em texto para ir pela internet.
    fetch('/patrono/salvar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            patronoServer: patrono,
            pontosServer: pontos
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            mensagem_salvar.innerHTML = 'Salvo! ' + deuses[patrono].nome + ' agora olha por você. Veja no seu perfil.';
        } else {
            mensagem_salvar.innerHTML = 'Não consegui salvar. Tente de novo.';
        }
    });
}


function refazerTeste() {
    for (var deus in pontos) {
        pontos[deus] = 0;
    }
    atual = 0;

    resultado_teste.style.display = 'none';
    area_teste.style.display = 'block';
    mostrarPergunta();
}


mostrarPergunta();
