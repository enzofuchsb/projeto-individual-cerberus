// ===== LOGIN E CADASTRO =====
// Por enquanto não existe API, então o site só confere os campos.
// Quando a API em Node.js ficar pronta, é aqui que ela vai ser chamada.

function mostrarErro(texto) {
    texto_erro.innerHTML = texto;
    caixa_erro.style.display = 'flex';
}


function entrar() {
    var email = input_email.value;
    var senha = input_senha.value;

    if (email == '' || senha == '') {
        mostrarErro('Preencha o e-mail e a senha.');
    } else if (senha.length < 8) {
        mostrarErro('A senha tem pelo menos 8 caracteres.');
    } else {
        irParaPainel();
    }
}


function cadastrar() {
    var nome = input_nome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmacao = input_confirmacao.value;

    if (nome == '' || email == '' || senha == '') {
        mostrarErro('Nenhuma alma passa sem preencher todos os campos.');
    } else if (senha.length < 8) {
        mostrarErro('A senha precisa ter pelo menos 8 caracteres.');
    } else if (senha != confirmacao) {
        mostrarErro('As duas senhas não são iguais.');
    } else {
        // TRECHO AVANÇADO: localStorage guarda um texto no navegador,
        // e ele continua lá mesmo quando a pessoa muda de página.
        // O painel lê esse nome para dar "Salve, ...".
        localStorage.setItem('nome', nome);
        irParaPainel();
    }
}


// TRECHO AVANÇADO: window.location.href muda a página que está aberta.
function irParaPainel() {
    window.location.href = 'painel.html';
}
