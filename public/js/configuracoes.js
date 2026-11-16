function mostrarConta() {
    conf_nome.innerHTML = sessionStorage.NOME_USUARIO;
    conf_email.innerHTML = sessionStorage.EMAIL_USUARIO;
}

validarSessao();
mostrarConta();
