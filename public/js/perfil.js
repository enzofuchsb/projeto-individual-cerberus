// Perfil "Minha Jornada": números, 2 gráficos e lista de favoritos

// Faz o GET e entrega os dados para a função "mostrar" que foi passada
function buscar(caminho, mostrar) {
    fetch("/historias/" + caminho, { cache: "no-store" }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (dados) {
                console.log("Dados de " + caminho + ": ", dados);
                mostrar(dados);
            });
        } else {
            console.log("Erro ao buscar " + caminho);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

// Os 3 números: lidas, favoritos e média das notas
function mostrarResumo(dados) {
    kpi_lidas.innerHTML = dados[0].lidas;
    kpi_favoritos.innerHTML = dados[0].favoritos;

    if (dados[0].media != null) {
        kpi_media.innerHTML = Number(dados[0].media).toFixed(1);
    }
}

// Gráfico de rosca: quantas histórias lidas de cada categoria
function mostrarRosca(dados) {
    var categorias = [];
    var quantidades = [];

    for (var i = 0; i < dados.length; i++) {
        categorias.push(dados[i].categoria);
        quantidades.push(dados[i].quantidade);
    }

    new Chart(document.getElementById("grafico_rosca"), {
        type: "doughnut",
        data: {
            labels: categorias,
            datasets: [{
                data: quantidades,
                backgroundColor: ["#c8693a", "#121417", "#f2b632", "#b0241b"]
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });
}

// Gráfico de barras: as 5 histórias com maior média de nota
function mostrarBarras(dados) {
    var nomes = [];
    var medias = [];

    for (var i = 0; i < dados.length; i++) {
        nomes.push(dados[i].nome);
        medias.push(dados[i].media);
    }

    new Chart(document.getElementById("grafico_barras"), {
        type: "bar",
        data: {
            labels: nomes,
            datasets: [{
                label: "Média de cerberinhos",
                data: medias,
                backgroundColor: "#c8693a"
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 5 }
            }
        }
    });
}

// Lista de favoritos, cada um com link para a sua página
function mostrarFavoritos(dados) {
    if (dados.length == 0) {
        lista_favoritos.innerHTML = "<li class='texto-apagado'>Você ainda não favoritou nenhuma história.</li>";
        return;
    }

    var html = "";

    for (var i = 0; i < dados.length; i++) {
        html = html + "<li><a href='" + dados[i].pagina + "'>" + dados[i].nome + "</a></li>";
    }

    lista_favoritos.innerHTML = html;
}

validarSessao();
nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var idUsuario = sessionStorage.ID_USUARIO;
buscar("resumo/" + idUsuario, mostrarResumo);
buscar("porCategoria/" + idUsuario, mostrarRosca);
buscar("maisBemAvaliadas", mostrarBarras);
buscar("favoritos/" + idUsuario, mostrarFavoritos);
