function marcarLeitura(historia) {
    var idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
        botao_lida.innerHTML = "Entre na sua conta para contar a leitura";
        return false;
    }

    fetch("/jornada/registrarLeitura", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            historiaServer: historia
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            botao_lida.innerHTML = "✓ Lida! Conta para os 12 Trabalhos";
        } else {
            console.log("Houve um erro ao tentar registrar a leitura!");
            botao_lida.innerHTML = "Não consegui registrar. Tente de novo";
        }
    }).catch(function (erro) {
        console.log(erro);
        botao_lida.innerHTML = "Não consegui registrar. Tente de novo";
    });

    return false;
}
