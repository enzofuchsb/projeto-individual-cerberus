var database = require("../database/config");

// ===== GRAVAR =====

// guarda o patrono e os pontos de cada deus (refazer o teste só troca os valores)
function salvarPatrono(idUsuario, patrono, pontos) {
    var instrucaoSql = `
        UPDATE usuario SET patrono = '${patrono}',
            pontos_zeus = ${pontos.zeus},
            pontos_poseidon = ${pontos.poseidon},
            pontos_hades = ${pontos.hades},
            pontos_atena = ${pontos.atena},
            pontos_ares = ${pontos.ares},
            pontos_apolo = ${pontos.apolo}
        WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarTentativa(idUsuario, categoria, acertos, total) {
    var instrucaoSql = `
        INSERT INTO tentativa_quiz (fk_usuario, categoria, acertos, total)
        VALUES (${idUsuario}, '${categoria}', ${acertos}, ${total});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// INSERT IGNORE: se a pessoa já leu essa história, o UNIQUE barra e o MySQL só ignora
function registrarLeitura(idUsuario, historia) {
    var instrucaoSql = `
        INSERT IGNORE INTO leitura_historia (fk_usuario, historia) VALUES (${idUsuario}, '${historia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// ===== BUSCAR PARA O PERFIL =====

// tudo o que o perfil precisa, em uma linha só
// cada (SELECT ...) é uma pergunta pequena ao banco, e a resposta vira uma coluna
function buscarDados(idUsuario) {
    var instrucaoSql = `
        SELECT nome, patrono,
               pontos_zeus, pontos_poseidon, pontos_hades, pontos_atena, pontos_ares, pontos_apolo,
               (SELECT COUNT(*) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS quizzes,
               (SELECT ROUND(AVG(acertos * 100 / total)) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS media,
               (SELECT ROUND(MAX(acertos * 100 / total)) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS melhor,
               (SELECT SUM(acertos) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS acertos,
               (SELECT SUM(total - acertos) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS erros,
               (SELECT COUNT(*) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario} AND acertos = total) AS notasMaximas,
               (SELECT COUNT(DISTINCT categoria) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS categorias,
               (SELECT COUNT(*) FROM leitura_historia WHERE fk_usuario = ${idUsuario}) AS historias
          FROM usuario
         WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// % de acerto dos últimos 10 quizzes (do mais novo para o mais antigo)
function buscarEvolucao(idUsuario) {
    var instrucaoSql = `
        SELECT ROUND(acertos * 100 / total) AS porcentagem
          FROM tentativa_quiz
         WHERE fk_usuario = ${idUsuario}
         ORDER BY id DESC
         LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarPatrono,
    registrarTentativa,
    registrarLeitura,
    buscarDados,
    buscarEvolucao
};
