var database = require("../database/config");

// Conta se leu (0 ou 1), pega a nota e conta se favoritou (0 ou 1)
function buscarEstado(idUsuario, idHistoria) {
    var instrucaoSql = `
        SELECT
            (SELECT COUNT(*) FROM leitura WHERE fk_usuario = ${idUsuario} AND fk_historia = ${idHistoria}) AS lida,
            (SELECT nota FROM leitura WHERE fk_usuario = ${idUsuario} AND fk_historia = ${idHistoria}) AS nota,
            (SELECT COUNT(*) FROM favorito WHERE fk_usuario = ${idUsuario} AND fk_historia = ${idHistoria}) AS favorito;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function marcarLeitura(idUsuario, idHistoria) {
    var instrucaoSql = `
        INSERT INTO leitura (fk_usuario, fk_historia) VALUES (${idUsuario}, ${idHistoria});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function avaliar(idUsuario, idHistoria, nota) {
    var instrucaoSql = `
        UPDATE leitura SET nota = ${nota} WHERE fk_usuario = ${idUsuario} AND fk_historia = ${idHistoria};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function favoritar(idUsuario, idHistoria) {
    var instrucaoSql = `
        INSERT INTO favorito (fk_usuario, fk_historia) VALUES (${idUsuario}, ${idHistoria});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function desfavoritar(idUsuario, idHistoria) {
    var instrucaoSql = `
        DELETE FROM favorito WHERE fk_usuario = ${idUsuario} AND fk_historia = ${idHistoria};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResumo(idUsuario) {
    var instrucaoSql = `
        SELECT
            (SELECT COUNT(*) FROM leitura WHERE fk_usuario = ${idUsuario}) AS lidas,
            (SELECT COUNT(*) FROM favorito WHERE fk_usuario = ${idUsuario}) AS favoritos,
            (SELECT AVG(nota) FROM leitura WHERE fk_usuario = ${idUsuario} AND nota IS NOT NULL) AS media;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorCategoria(idUsuario) {
    var instrucaoSql = `
        SELECT h.categoria, COUNT(*) AS quantidade
          FROM leitura l
          JOIN historia h ON l.fk_historia = h.id
         WHERE l.fk_usuario = ${idUsuario}
         GROUP BY h.categoria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMaisBemAvaliadas() {
    var instrucaoSql = `
        SELECT h.nome, AVG(l.nota) AS media
          FROM leitura l
          JOIN historia h ON l.fk_historia = h.id
         WHERE l.nota IS NOT NULL
         GROUP BY h.id, h.nome
         ORDER BY media DESC
         LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFavoritos(idUsuario) {
    var instrucaoSql = `
        SELECT h.nome, h.pagina
          FROM favorito f
          JOIN historia h ON f.fk_historia = h.id
         WHERE f.fk_usuario = ${idUsuario}
         ORDER BY f.data_hora DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarEstado,
    marcarLeitura,
    avaliar,
    favoritar,
    desfavoritar,
    buscarResumo,
    buscarPorCategoria,
    buscarMaisBemAvaliadas,
    buscarFavoritos
};
