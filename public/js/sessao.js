function validarSessao() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (idUsuario == undefined || nome == undefined) {
        window.location = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}
