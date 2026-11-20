-- Banco do projeto Cerberus
DROP DATABASE IF EXISTS cerberus;
CREATE DATABASE cerberus;
USE cerberus;

-- Quem usa o site
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL
);

-- Cada página de história do site
CREATE TABLE historia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    pagina VARCHAR(40) NOT NULL,
    CHECK (categoria IN ('deuses', 'herois', 'criaturas', 'lugares'))
);

-- Usuário leu a história (N:N), com nota opcional de 1 a 5
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

-- Usuário favoritou a história (N:N)
CREATE TABLE favorito (
    fk_usuario INT,
    fk_historia INT,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fk_usuario, fk_historia),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_historia) REFERENCES historia(id)
);

-- Todas as histórias que existem como página (o id é usado no HTML)
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

-- Usuários de teste
INSERT INTO usuario (nome, email, senha) VALUES
    ('Viajante Teste', 'teste@cerberus.com', '12345678'),
    ('Alma Nova', 'nova@cerberus.com', '12345678');

-- Leituras e notas (14 = Hades, 16 = Héracles, 8 = Cérbero, 25 = Perséfone, 30 = Zeus, 23 = Olimpo)
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

-- ===== SELECTs do dashboard (perfil "Minha Jornada") =====
-- Troque o 1 pelo id do usuário que quiser testar

-- 1. Os 3 números: lidas, favoritos e média das notas
SELECT
    (SELECT COUNT(*) FROM leitura WHERE fk_usuario = 1) AS lidas,
    (SELECT COUNT(*) FROM favorito WHERE fk_usuario = 1) AS favoritos,
    (SELECT AVG(nota) FROM leitura WHERE fk_usuario = 1 AND nota IS NOT NULL) AS media;

-- 2. Gráfico de rosca: histórias lidas por categoria
SELECT h.categoria, COUNT(*) AS quantidade
  FROM leitura l
  JOIN historia h ON l.fk_historia = h.id
 WHERE l.fk_usuario = 1
 GROUP BY h.categoria;

-- 3. Gráfico de barras: 5 histórias mais bem avaliadas do site
SELECT h.nome, AVG(l.nota) AS media
  FROM leitura l
  JOIN historia h ON l.fk_historia = h.id
 WHERE l.nota IS NOT NULL
 GROUP BY h.id, h.nome
 ORDER BY media DESC
 LIMIT 5;

-- 4. Lista de favoritos do usuário
SELECT h.nome, h.pagina
  FROM favorito f
  JOIN historia h ON f.fk_historia = h.id
 WHERE f.fk_usuario = 1
 ORDER BY f.data_hora DESC;

-- 5. Estado do usuário numa história (usado ao abrir a página)
SELECT
    (SELECT COUNT(*) FROM leitura WHERE fk_usuario = 1 AND fk_historia = 14) AS lida,
    (SELECT nota FROM leitura WHERE fk_usuario = 1 AND fk_historia = 14) AS nota,
    (SELECT COUNT(*) FROM favorito WHERE fk_usuario = 1 AND fk_historia = 14) AS favorito;
