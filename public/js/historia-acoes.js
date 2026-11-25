var lida = false;
var favoritado = false;

function buscarEstado(idHistoria) {
    var idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
        return false;
    }

    fetch("/historias/estado/" + idUsuario + "/" + idHistoria).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (dados) {
                if (dados[0].lida > 0) {
                    mostrarLida();
                    acenderCerberinhos(dados[0].nota);
                }
                if (dados[0].favorito > 0) {
                    mostrarFavorito(true);
                }
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function enviar(caminho, metodo, idHistoria, nota) {
    return fetch("/historias/" + caminho, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO,
            idHistoriaServer: idHistoria,
            notaServer: nota
        })
    });
}

function marcarLeitura(idHistoria) {
    if (sessionStorage.ID_USUARIO == undefined) {
        botao_lida.innerHTML = "Entre na sua conta para contar a leitura";
        return false;
    }

    if (lida == true) {
        return false;
    }

    enviar("ler", "POST", idHistoria).then(function (resposta) {
        if (resposta.ok) {
            mostrarLida();
        } else {
            botao_lida.innerHTML = "Não consegui registrar. Tente de novo";
        }
    });
}

function mostrarLida() {
    lida = true;
    botao_lida.innerHTML = "✓ Lida";
    area_nota.style.display = "block";
}

function avaliar(idHistoria, nota) {
    enviar("avaliar", "PUT", idHistoria, nota).then(function (resposta) {
        if (resposta.ok) {
            acenderCerberinhos(nota);
        }
    });
}

function acenderCerberinhos(nota) {
    for (var i = 1; i <= 5; i++) {
        var cerberinho = document.getElementById("cerberinho_" + i);

        if (nota != null && i <= nota) {
            cerberinho.className = "cerberinho aceso";
        } else {
            cerberinho.className = "cerberinho";
        }
    }
}

function favoritar(idHistoria) {
    if (sessionStorage.ID_USUARIO == undefined) {
        botao_favorito.innerHTML = "Entre na sua conta para favoritar";
        return false;
    }

    if (favoritado == false) {
        enviar("favoritar", "POST", idHistoria).then(function (resposta) {
            if (resposta.ok) {
                mostrarFavorito(true);
            }
        });
    } else {
        enviar("desfavoritar", "DELETE", idHistoria).then(function (resposta) {
            if (resposta.ok) {
                mostrarFavorito(false);
            }
        });
    }
}

function mostrarFavorito(ativo) {
    favoritado = ativo;

    if (ativo == true) {
        botao_favorito.innerHTML = "♥ Nos seus favoritos";
        botao_favorito.className = "favorito favorito-ativo";
    } else {
        botao_favorito.innerHTML = "♡ Adicionar aos favoritos";
        botao_favorito.className = "favorito";
    }
}
