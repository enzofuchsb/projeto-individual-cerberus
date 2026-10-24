// Desafio do Guardião: o visitante clica em um deus e o Cerberus diz se acertou
var tentativas = 0;

function responder(resposta) {
    tentativas = tentativas + 1;

    if (resposta == 'Poseidon' && tentativas == 1) {
        mensagem_desafio.innerHTML = 'Acertou de primeira! Poseidon governa os mares. Pode passar, viajante.';
    } else if (resposta == 'Poseidon') {
        mensagem_desafio.innerHTML = 'Acertou depois de ' + tentativas + ' tentativas. Poseidon é o deus dos mares.';
    } else if (resposta == 'Zeus') {
        mensagem_desafio.innerHTML = 'Errado. Zeus reina no céu, não no mar. Tente outra vez.';
    } else {
        mensagem_desafio.innerHTML = 'Errado. ' + resposta + ' não manda nas águas. Tente outra vez.';
    }
}

// Chamada final: o Cerberus pergunta o nome e uiva uma vez por cabeça
function atravessar() {
    var nome = input_nome.value;

    if (nome == '') {
        mensagem_portao.innerHTML = 'Nenhuma alma passa sem dizer seu nome.';
    } else {
        var uivos = '';

        for (var cabeca = 1; cabeca <= 3; cabeca++) {
            uivos = uivos + 'Auuu! ';
        }

        mensagem_portao.innerHTML = uivos + 'Bem-vindo, ' + nome + '. O portão está aberto.';
    }
}
