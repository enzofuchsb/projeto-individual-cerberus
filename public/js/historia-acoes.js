// Ações das páginas de história: marcar como lida, avaliar e favoritar
var lida = false;
var favoritado = false;

// Ao abrir a página: busca no banco o que o usuário já fez nesta história
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

// Envia ao servidor o usuário e a história (e a nota, quando tiver)
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

// Botão "Marcar como lida": INSERT em leitura
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

// Muda o botão para "Lida" e mostra os cerberinhos de avaliação
function mostrarLida() {
    lida = true;
    botao_lida.innerHTML = "✓ Lida";
    area_nota.style.display = "block";
}

// Clique num cerberinho: UPDATE da nota em leitura
function avaliar(idHistoria, nota) {
    enviar("avaliar", "PUT", idHistoria, nota).then(function (resposta) {
        if (resposta.ok) {
            acenderCerberinhos(nota);
        }
    });
}

// Acende os cerberinhos até a nota e apaga o resto
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

// Botão de favorito: INSERT se não é favorito, DELETE se já é
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

// Muda o texto e a cor do botão de favorito
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
