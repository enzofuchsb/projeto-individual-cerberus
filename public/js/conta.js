// ===== LOGIN E CADASTRO =====
// Primeiro o site confere os campos. Se estiver tudo certo, chama a API.

function mostrarErro(texto) {
    texto_erro.innerHTML = texto;
    caixa_erro.style.display = 'flex';
}


function entrar() {
    var email = input_email.value;
    var senha = input_senha.value;

    if (email == '' || senha == '') {
        mostrarErro('Preencha o e-mail e a senha.');
        return;
    }

    // TRECHO AVANÇADO: fetch com POST manda o e-mail e a senha para a API.
    // JSON.stringify transforma o objeto em texto para ir pela internet.
    fetch('/usuarios/autenticar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (usuario) {
                // sessionStorage guarda os dados enquanto a aba estiver aberta
                sessionStorage.setItem('ID_USUARIO', usuario.id);
                sessionStorage.setItem('NOME_USUARIO', usuario.nome);
                sessionStorage.setItem('EMAIL_USUARIO', usuario.email);
                window.location.href = 'perfil.html';
            });
        } else {
            mostrarErro('E-mail ou senha incorretos. Não reconheço essa alma.');
        }
    });
}


function cadastrar() {
    var nome = input_nome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmacao = input_confirmacao.value;

    if (nome == '' || email == '' || senha == '') {
        mostrarErro('Nenhuma alma passa sem preencher todos os campos.');
        return;
    } else if (senha.length < 8) {
        mostrarErro('A senha precisa ter pelo menos 8 caracteres.');
        return;
    } else if (senha != confirmacao) {
        mostrarErro('As duas senhas não são iguais.');
        return;
    }

    fetch('/usuarios/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            // conta criada: vai para o login
            window.location.href = 'login.html';
        } else {
            mostrarErro('Não deu para criar a conta. Esse e-mail já pode estar em uso.');
        }
    });
}
