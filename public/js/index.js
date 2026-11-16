var tentativas = 0;

var frases = [
    "Nenhuma alma passa sem que eu saiba <em>seu nome.</em>",
    "Três cabeças, <em>mil histórias</em> para contar.",
    "Do Olimpo ao Tártaro, <em>eu conheço o caminho.</em>"
];

function responder(resposta) {
    tentativas = tentativas + 1;

    if (resposta == "Poseidon" && tentativas == 1) {
        mensagem_desafio.innerHTML = "Acertou de primeira! Poseidon governa os mares.";
    } else if (resposta == "Poseidon") {
        mensagem_desafio.innerHTML = "Acertou depois de " + tentativas + " tentativas.";
    } else if (resposta == "Zeus") {
        mensagem_desafio.innerHTML = "Errado. Zeus reina no céu, não no mar.";
    } else {
        mensagem_desafio.innerHTML = "Errado. " + resposta + " não manda nas águas.";
    }
}

function atravessar() {
    var nomeVar = input_nome.value;

    if (nomeVar == "") {
        mensagem_portao.innerHTML = "Nenhuma alma passa sem dizer seu nome.";
    } else {
        var uivos = "";

        for (var cabeca = 1; cabeca <= 3; cabeca++) {
            uivos = uivos + "Auuu! ";
        }

        mensagem_portao.innerHTML = uivos + "Bem-vindo, " + nomeVar + ". O portão está aberto.";
    }
}

function sortearFrase() {
    var sorteio = Math.floor(Math.random() * frases.length);
    titulo_hero.innerHTML = frases[sorteio];
}

function esconderConvite() {
    if (sessionStorage.ID_USUARIO != undefined) {
        bloco_login.style.display = "none";
    }
}

sortearFrase();
esconderConvite();
