DROP DATABASE IF EXISTS cerberus;
CREATE DATABASE cerberus;
USE cerberus;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL
);

CREATE TABLE historia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    pagina VARCHAR(40) NOT NULL,
    CHECK (categoria IN ('deuses', 'herois', 'criaturas', 'lugares'))
);

CREATE TABLE leitura (
    fk_usuario INT,
    fk_historia INT,
    nota INT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fk_usuario, fk_historia),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_historia) REFERENCES historia(id),
    CHECK (nota BETWEEN 1 AND 5)
);

CREATE TABLE favorito (
    fk_usuario INT,
    fk_historia INT,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fk_usuario, fk_historia),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_historia) REFERENCES historia(id)
);

INSERT INTO historia (nome, categoria, pagina) VALUES
    ('Aqueronte', 'lugares', 'aqueronte.html'),
    ('Aquiles', 'herois', 'aquiles.html'),
    ('Atalanta', 'herois', 'atalanta.html'),
    ('Atena', 'deuses', 'atena.html'),
    ('Atenas', 'lugares', 'atenas.html'),
    ('Belerofonte', 'herois', 'belerofonte.html'),
    ('Caos', 'deuses', 'caos.html'),
    ('Cérbero', 'criaturas', 'cerberus.html'),
    ('Cnossos', 'lugares', 'cnossos.html'),
    ('Cronos', 'deuses', 'cronos.html'),
    ('Delfos', 'lugares', 'delfos.html'),
    ('Deméter', 'deuses', 'demeter.html'),
    ('Gaia', 'deuses', 'gaia.html'),
    ('Hades', 'deuses', 'hades.html'),
    ('Hera', 'deuses', 'hera.html'),
    ('Héracles', 'herois', 'heracles.html'),
    ('Ítaca', 'lugares', 'itaca.html'),
    ('Jasão', 'herois', 'jasao.html'),
    ('Medusa', 'criaturas', 'medusa.html'),
    ('Micenas', 'lugares', 'micenas.html'),
    ('Necromanteion', 'lugares', 'necromanteion.html'),
    ('Odisseu', 'herois', 'odisseu.html'),
    ('Monte Olimpo', 'lugares', 'olimpo.html'),
    ('Orfeu', 'herois', 'orfeu.html'),
    ('Perséfone', 'deuses', 'persefone.html'),
    ('Perseu', 'herois', 'perseu.html'),
    ('Poseidon', 'deuses', 'poseidon.html'),
    ('Teseu', 'herois', 'teseu.html'),
    ('Troia', 'lugares', 'troia.html'),
    ('Zeus', 'deuses', 'zeus.html'),
    ('Minotauro', 'criaturas', 'minotauro.html'),
    ('Quimera', 'criaturas', 'quimera.html'),
    ('Esfinge', 'criaturas', 'esfinge.html'),
    ('Centauro', 'criaturas', 'centauro.html'),
    ('Hidra de Lerna', 'criaturas', 'hidra.html'),
    ('Sereia', 'criaturas', 'sereia.html'),
    ('Ciclope', 'criaturas', 'ciclope.html');

INSERT INTO usuario (nome, email, senha) VALUES
    ('Viajante Teste', 'teste@cerberus.com', '12345678'),
    ('Alma Nova', 'nova@cerberus.com', '12345678');

INSERT INTO leitura (fk_usuario, fk_historia, nota) VALUES
    (1, 14, 5),
    (1, 16, 4),
    (1, 8, 5),
    (1, 25, 3),
    (1, 30, NULL),
    (1, 23, 4),
    (2, 14, 4),
    (2, 25, 5),
    (2, 30, 2);

INSERT INTO favorito (fk_usuario, fk_historia) VALUES
    (1, 14),
    (1, 8),
    (1, 23),
    (2, 25);

SELECT
    (SELECT COUNT(*) FROM leitura WHERE fk_usuario = 1) AS lidas,
    (SELECT COUNT(*) FROM favorito WHERE fk_usuario = 1) AS favoritos,
    (SELECT ROUND(AVG(nota), 1) FROM leitura WHERE fk_usuario = 1 AND nota IS NOT NULL) AS media,
    (SELECT COUNT(*) FROM historia) AS total;

SELECT h.categoria, COUNT(*) AS quantidade
  FROM leitura l
  JOIN historia h ON l.fk_historia = h.id
 WHERE l.fk_usuario = 1
 GROUP BY h.categoria;

SELECT h.nome, AVG(l.nota) AS media
  FROM leitura l
  JOIN historia h ON l.fk_historia = h.id
 WHERE l.nota IS NOT NULL
 GROUP BY h.id, h.nome
 ORDER BY media DESC
 LIMIT 5;

SELECT h.nome, h.pagina
  FROM favorito f
  JOIN historia h ON f.fk_historia = h.id
 WHERE f.fk_usuario = 1
 ORDER BY f.data_hora DESC;

SELECT
    (SELECT COUNT(*) FROM leitura WHERE fk_usuario = 1 AND fk_historia = 14) AS lida,
    (SELECT nota FROM leitura WHERE fk_usuario = 1 AND fk_historia = 14) AS nota,
    (SELECT COUNT(*) FROM favorito WHERE fk_usuario = 1 AND fk_historia = 14) AS favorito;
