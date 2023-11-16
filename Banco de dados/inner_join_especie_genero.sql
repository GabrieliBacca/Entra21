create database especie_genero;

use especie_genero;

create table genero(
	id_genero int primary key auto_increment,
	nome varchar(60),
    descricao varchar(100),
    origem_geografica varchar(100)
);

create table especie(
	id_especie int primary key auto_increment,
	nome varchar(60),
    descricao varchar(100),
    populacao bigint,
    habitat varchar(50),
    id_genero int references genero(id_genero)
);

-- 1) Lista de Espécies e Seus Gêneros:
select especie.nome, especie.descricao, especie.populacao, especie.habitat, genero.nome, genero.descricao, genero.origem_geografica from especie inner join genero 
on especie.id_genero = genero.id_genero;

-- 2) Total de Espécies por Gênero
select genero.nome, genero.descricao, count(especie.id_especie) as Total_Especie_Genero from especie inner join genero on especie.id_genero = genero.id_genero group by genero.nome,genero.descricao;

-- 3) Detalhes da Espécie com Informações do Gênero:
select e.nome, e.descricao, e.populacao, e.habitat, g.nome, g.descricao, g.origem_geografica from especie e inner join genero g 
on e.id_genero = g.id_genero order by e.nome asc;

-- 4) Gêneros sem Espécies:
select g.nome, count(e.id_genero is null), g.descricao, g.origem_geografica from genero g left join especie e on g.id_genero = e.id_genero where e.id_genero is null group by g.nome,e.nome, g.descricao, g.origem_geografica;

-- 5) Um pesquisador precisa identificar a espécie com a menor população registrada:
select e.nome, min(e.populacao) from especie e inner join genero g on g.id_genero = e.id_genero group by e.nome order by min(e.populacao) limit 1;

-- 6) Um gestor de zoológico pretende destacar as espécies mais numerosas para exposição:
select e.nome, max(e.populacao) as max from especie e inner join genero g on g.id_genero = e.id_genero group by e.nome order by max desc;

-- 7) Um biólogo explora a diversidade de espécies na Floresta Amazônica:
select e.nome, e.habitat from especie e inner join genero g on g.id_genero = e.id_genero where habitat like '%florestas tropicais%';

-- 8) Explorando a Biodiversidade Marinha: Análise Detalhada das Espécies do Gênero "Carcharodon"
-- Inserir gênero "Carcharodon" na tabela 'genero'
INSERT INTO genero (nome, descricao, origem_geografica) VALUES 
  ('Carcharodon', 'Gênero de tubarões', 'Mundial');

-- Inserir espécies associadas ao gênero "Carcharodon" na tabela 'especie'
INSERT INTO especie (nome, descricao, populacao, habitat, id_genero) VALUES
  ('Carcharodon carcharias', 'Tubarão-branco', 3000, 'Oceanos', 14),
  ('Carcharodon megalodon', 'Tubarão-megalodon', 0, 'Extinto', 14);
  
select e.nome from especie e inner join genero g on g.id_genero = e.id_genero where g.nome ='Carcharodon';

-- 9) Explorando a Origem Geográfica 
-- Inserir o gênero "Hippocampus" se ainda não existir
INSERT INTO genero (nome, descricao, origem_geografica) 
VALUES ('Hippocampus', 'Cavalo-marinho', 'Mundial')
ON DUPLICATE KEY UPDATE nome = nome; -- Garante que o gênero não será duplicado

-- Inserir a espécie "Hippocampus reidi"
INSERT INTO especie (nome, descricao, populacao, habitat, id_genero) 
VALUES ('Hippocampus reidi', 'Cavalo-marinho de focinho longo', 5000, 'Recifes de coral', @id_genero_hippocampus);

select e.nome, e.habitat, e.descricao from especie e where e.nome ='Hippocampus reidi';

-- 10) Pesquisa na Austrália
select e.nome, e.habitat from especie e inner join genero g on g.id_genero = e.id_genero where habitat like '%montanhas%';

-- 11) Totalizando o Banco de Dados
select g.nome, count(e.id_genero) as Quantidade_especie from especie e inner join genero g on g.id_genero = e.id_genero group by g.nome;

-- 12) total das especies de cada genero
select g.nome, count(e.id_genero) as Quantidade_especie from especie e inner join genero g on g.id_genero = e.id_genero group by g.nome;

-- 13) media das especies de cada genero
select g.nome, avg(e.id_genero) as media_especie from especie e inner join genero g on g.id_genero = e.id_genero group by g.nome;

-- 14) soma de toda população
select count(e.id_especie) as soma_total from especie e inner join genero g on g.id_genero = e.id_genero;


-- insert genero sem especie 
INSERT INTO genero (nome, descricao, origem_geografica) VALUES 
('Ave', 'ave' , 'asia');


-- Inserções para a tabela 'genero'
INSERT INTO genero (nome, descricao, origem_geografica) VALUES 
  ('Felino', 'Mamíferos carnívoros', 'Mundial'),
  ('Canídeo', 'Mamíferos carnívoros', 'Mundial'),
  ('Ursídeo', 'Mamíferos onívoros', 'Mundial'),
  ('Cetáceo', 'Mamíferos marinhos', 'Mundial'),
  ('Ave de Rapina', 'Aves carnívoras', 'Mundial'),
  ('Réptil', 'Répteis rastejantes', 'Mundial'),
  ('Mamífero', 'Mamíferos terrestres', 'Mundial'),
  ('Urso', 'Mamífero onívoro', 'Mundial'),
  ('Primate', 'Mamíferos primatas', 'Mundial'),
  ('Peixe', 'Peixes cartilaginosos', 'Mundial');

-- Inserções adicionais para a tabela 'especie' com id de generos diversos
INSERT INTO especie (nome, descricao, populacao, habitat, id_genero) VALUES
  ('Leão Africano', 'O rei da savana', 20000, 'Savana', 1),
  ('Tigre de Sumatra', 'Beleza nas selvas', 800, 'Florestas tropicais', 2),
  ('Urso Polar', 'Adaptado ao gelo', 25000, 'Regiões árticas', 3),
  ('Golfinho Orca', 'Predador dos oceanos', 5000, 'Oceanos', 4),
  ('Águia-de-cauda-branca', 'Majestosa nos céus', 1500, 'Planaltos', 5),
  ('Cobra Coral', 'Cores venenosas', 2000, 'Florestas tropicais', 6),
  ('Elefante Asiático', 'Gigante amigável', 30000, 'Florestas', 7),
  ('Panda Vermelho', 'Pequeno e fofo', 4000, 'Florestas de bambu', 8),
  ('Gorila-das-Planícies', 'Social e robusto', 12000, 'Savana', 9),
  ('Tubarão Martelo', 'Forma distintiva', 6000, 'Oceanos', 10),
  ('Leopardo-das-neves', 'Camuflado nas montanhas', 2000, 'Montanhas', 1),
  ('Lobo Cinzento', 'Inteligente e social', 150000, 'Florestas', 2),
  ('Urso-negro-asiático', 'Habitante das florestas', 10000, 'Florestas', 3),
  ('Boto-cor-de-rosa', 'Encantador dos rios', 5000, 'Rios', 4),
  ('Águia-pescadora', 'Mergulhos precisos', 800, 'Lagos', 5),
  ('Serpente Marinha', 'Adaptada aos oceanos', 3000, 'Oceanos', 6),
  ('Elefante de Sumatra', 'Conservação crítica', 2400, 'Florestas tropicais', 7),
  ('Panda Gigante (segunda espécie)', 'Icone de conservação', 2000, 'Florestas de bambu', 8),
  ('Gorila-de-grauer', 'Raro e ameaçado', 400, 'Florestas', 9),
  ('Tubarão-tigre', 'Nadador poderoso', 9000, 'Oceanos', 10),
  ('Leopardo-das-neves (segunda espécie)', 'Alta montanha', 1000, 'Montanhas', 1),
  ('Cão Selvagem Africano', 'Ágil e caçador', 6000, 'Savanas', 2),
  ('Urso-de-óculos', 'Ursídeo sul-americano', 2000, 'Florestas', 3),
  ('Golfinho do Rio Amazonas', 'Águas doces e misteriosas', 3000, 'Rios', 4),
  ('Águia-imperial-ibérica', 'Ave majestosa em perigo', 300, 'Planaltos', 5),
  ('Cobra-rei', 'Veneno potente', 1500, 'Florestas tropicais', 6),
  ('Elefante-da-floresta', 'Habitante discreto', 10000, 'Florestas', 7),
  ('Panda Vermelho (segunda espécie)', 'Adorável e pequeno', 2500, 'Florestas de bambu', 8),
  ('Gorila-das-Planícies (segunda espécie)', 'Específico da savana', 8000, 'Savana', 9),
  ('Tubarão-martelo-liso', 'Nadador elegante', 4000, 'Oceanos', 10);

