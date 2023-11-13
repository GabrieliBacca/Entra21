create database empresa; 

use empresa;

create table departamentos(
	id int primary key auto_increment,
    nome varchar(50),
    localizacao varchar(80)
);

create table funcionario(
	id int primary key auto_increment,
    nome varchar(80),
    id_departamento int references departamentos(id),
    cargo varchar(50),
    dataContratacao date
);

insert into departamentos(nome,localizacao) values 
('RH', 'Sala 101'),
('TI', 'Sala 103'),
('Vendas', 'Sala 202'),
('Finanças', 'Sala 102'),
('Marketing', 'Sala 203');

insert into funcionario(nome, id_departamento, cargo, dataContratacao) value
('Elon Musk', 4, 'Estagiario', '2023-11-12'),
('Thiago', 5, 'Investidor', '2017-11-12'),
('Maria Joaquina', 3, 'Vendedora', '2001-11-12'),
('Juriscleisson from Silva', 1, 'Supervisor', '2002-11-02'),
('Fidel Castro', 2, 'Dev Junior', '2007-01-03'),
('Andrelaine Reshtegui', 4, 'Analista', '2015-08-27'),
('Delicia Maria', 1, 'Analista', '1996-11-28'),
('Celso Portioli', 4, 'Jovem Aprendiz', '2023-09-11'),
('Steve Jobs Trabalhos', 2, 'Dev Senior', '2006-11-01'),
('Anitta From Favela', 2, 'Dev Pleno', '2011-11-24');

select funcionario.*, departamentos.* from funcionario inner join departamentos on funcionario.id_departamento = departamentos.id order by id_departamento asc;

select funcionario.nome, departamentos.nome from funcionario inner join departamentos on funcionario.id_departamento = departamentos.id where departamentos.nome = 'Financas';

select funcionario.*, departamentos.* from funcionario inner join departamentos on funcionario.id_departamento = departamentos.id where cargo like '%lista%' and departamentos.nome = 'rh';



-- -------------------------------------------------------------------------------------------------------------------


create database netflix;

use netflix;

create table diretores(
	id_diretores int primary key auto_increment,
	nome varchar(50),
    idade int,
    nacionalidade varchar(20)    
);

create table series(
		id_serie int primary key auto_increment,
        titulo varchar(50),
        resumo varchar(110),
        genero varchar(50),
        id_diretor int references diretores(id_diretores)
);

insert into diretores (nome,idade, nacionalidade) values 
('Brad Pinto', 39, 'brasileiro'),
('Luisa Sonza', 99, 'canadense'),
('Bruno Souza', 59, 'estadunidense'),
('Edson Vini', 39, 'brasileiro'),
('Elton Pedro', 79, 'brasileiro'),
('Exelidade', 32, 'estadunidense'),
('Licanana', 59, 'estadunidense'),
('Lucas Vicenti', 42, 'chines'),
('Patonilo Vilson', 21, 'africano');

INSERT INTO series (titulo, resumo, genero, id_diretor) VALUES
  ('Stranger Things', 'Um grupo de crianças nos anos 80 encontra forças sobrenaturais.', 'Sci-Fi, Terror', 1),
  ('A Origem', 'Um ladrão entra nos sonhos dos outros para roubar seus segredos.', 'Sci-Fi, Ação', 2),
  ('Pulp Fiction', 'Histórias entrelaçadas de mafiosos, pistoleiros e pugilistas de Los Angeles.', 'Crime, Drama', 3),
  ('A Viagem de Chihiro', 'Uma jovem navega por um mundo mágico e misterioso para salvar seus pais.', 'Animação, Aventura', 4),
  ('Selma', 'A história da luta histórica do Dr. Martin Luther King Jr. pelos direitos civis.', 'Biografia, Drama', 5),
  ('Parasita', 'Uma família pobre elabora planos para trabalhar para uma família rica.', 'Drama, Suspense', 6),
  ('Lady Bird', 'Um filme sobre a adolescência, seguindo a vida de uma estudante do último ano do ensino médio.', 'Comédia, Drama', 7),
  ('O Irlandês', 'Um assassino da máfia reflete sobre sua vida e crimes.', 'Biografia, Crime', 8),
  ('Blade Runner 2049', 'Um caçador de androides descobre um segredo há muito enterrado.', 'Sci-Fi, Suspense', 9);

select funcionario.*, departamentos.* from funcionario inner join departamentos on funcionario.id_departamento = departamentos.id order by id_departamento asc;

select series.titulo, diretores.nome from series inner join diretores on series.id_diretor = diretores.id_diretores where diretores.nacionalidade = 'estadunidense';

select series.genero as 'genero filme', diretores.idade as 'idade diretor' from series inner join diretores on series.id_diretor = diretores.id_diretores where diretores.idade > 48;


select count(*) as total_series from series inner join diretores on series.id_diretor = diretores.id_diretores where diretores.nacionalidade like '%brasileir%' and series.genero like '%drama%';

-- Jeito que o professor passou
select count(series.id_serie) as total_series from series inner join diretores on series.id_diretor = diretores.id_diretores where diretores.nacionalidade like '%brasileir%' and series.genero like '%drama%';



