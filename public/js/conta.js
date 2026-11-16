function mostrarErro(texto) {
    texto_erro.innerHTML = texto;
    caixa_erro.style.display = "flex";
}

function entrar() {
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == "" || senhaVar == "") {
        mostrarErro("Preencha o e-mail e a senha.");
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
            resposta.json().then(function (json) {
                console.log(json);

                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.EMAIL_USUARIO = json.email;

                window.location = "perfil.html";
            });
        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            mostrarErro("E-mail ou senha incorretos. Não reconheço essa alma.");
        }
    }).catch(function (erro) {
        console.log(erro);
        mostrarErro("Não consegui falar com o servidor. Tente de novo.");
    });

    return false;
}

function cadastrar() {
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmacao.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "") {
        mostrarErro("Nenhuma alma passa sem preencher todos os campos.");
        return false;
    } else if (senhaVar.length < 8) {
        mostrarErro("A senha precisa ter pelo menos 8 caracteres.");
        return false;
    } else if (senhaVar != confirmacaoSenhaVar) {
        mostrarErro("As duas senhas não são iguais.");
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.location = "login.html";
        } else {
            console.log("Houve um erro ao tentar realizar o cadastro!");
            mostrarErro("Não deu para criar a conta. Esse e-mail já pode estar em uso.");
        }
    }).catch(function (erro) {
        console.log(erro);
        mostrarErro("Não consegui falar com o servidor. Tente de novo.");
    });

    return false;
}
