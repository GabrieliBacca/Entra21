create database herois;

use herois;

create table super_herois(
	id integer primary key auto_increment,
    nome_fantasia varchar(50),
    nome_real varchar(50),
    habilidade varchar(50),
    filme varchar(50),
    produtora varchar(20),
    idade int,
    sexo varchar(50),
    parceiro varchar(50)
);

INSERT INTO super_herois (nome_fantasia, nome_real, habilidade, filme, produtora, idade, sexo, parceiro)
VALUES
  ('Superman', 'Clark Kent', 'Super força e voo', 'Superman: O Filme', 'DC Comics', 35, 'Masculino', 'Mulher-Maravilha'),
  ('Batman', 'Bruce Wayne', 'Habilidades de detetive', 'Batman: O Cavaleiro das Trevas', 'DC Comics', 40, 'Masculino', 'Robin'),
  ('Mulher-Maravilha', 'Diana Prince', 'Força sobre-humana e habilidades divinas', 'Mulher-Maravilha', 'DC Comics', 30, 'Feminino', 'Superman'),
  ('Homem de Ferro', 'Tony Stark', 'Tecnologia avançada e armadura', 'Homem de Ferro', 'Marvel Studios', 45, 'Masculino', 'Capitão América'),
  ('Thor', 'Thor Odinson', 'Manipulação de trovões e martelo mágico', 'Thor', 'Marvel Comics', 1500, 'Masculino', 'Hulk'),
  ('Mulher-Gato', 'Selina Kyle', 'Agilidade e destreza', 'Batman: O Retorno', 'DC Comics', 35, 'Feminino', 'Batman'),
  ('Homem-Aranha', 'Peter Parker', 'Agilidade e teia de aranha', 'Homem-Aranha: De Volta ao Lar', 'Marvel Comics', 25, 'Masculino', 'Mary Jane Watson'),
  ('Flash', 'Barry Allen', 'Velocidade sobre-humana', 'Liga da Justiça', 'DC Comics', 30, 'Masculino', 'Superman'),
  ('Capitão América', 'Steve Rogers', 'Força sobre-humana e escudo indestrutível', 'Capitão América: O Primeiro Vingador', 'Marvel Comics', 100, 'Masculino', 'Viúva Negra'),
  ('Viúva Negra', 'Natasha Romanoff', 'Especialista em combate', 'Viúva Negra', 'Marvel Studios', 35, 'Feminino', 'Capitão América'),
  ('Aquaman', 'Arthur Curry', 'Comunicação com animais marinhos', 'Aquaman', 'DC Comics', 35, 'Masculino', 'Mulher-Maravilha'),
  ('Hulk', 'Bruce Banner', 'Força sobre-humana e resistência', 'Os Vingadores', 'Marvel Comics', 40, 'Masculino', 'Thor'),
  ('Lanterna Verde', 'Hal Jordan', 'Anel de poder com construção de objetos', 'Lanterna Verde', 'DC Comics', 30, 'Masculino', 'Flash'),
  ('Doutor Estranho', 'Stephen Strange', 'Magia e manipulação do tempo', 'Doutor Estranho', 'Marvel Studios', 40, 'Masculino', 'Feiticeira Escarlate'),
  ('Feiticeira Escarlate', 'Wanda Maximoff', 'Manipulação da realidade', 'WandaVision', 'Marvel Comics', 30, 'Feminino', 'Doutor Estranho'),
  ('Pantera Negra', 'T''Challa', 'Força e agilidade aprimoradas', 'Pantera Negra', 'Marvel Studios', 35, 'Masculino', 'Shuri'),
  ('Shuri', 'Shuri', 'Gênio da tecnologia', 'Pantera Negra', 'Marvel Comics', 30, 'Feminino', 'Pantera Negra'),
  ('Capitã Marvel', 'Carol Danvers', 'Poderes cósmicos', 'Capitã Marvel', 'Marvel Studios', 30, 'Feminino', 'Nick Fury');
-- Incluir outras inserções aqui...


select * from super_herois where produtora like '%mar%'; -- 1

select * from super_herois where produtora like '%DC%'; -- 2 

select nome_fantasia from super_herois where sexo like '%fem%'; -- 3

select nome_fantasia from super_herois where parceiro like '%Capitão%'; -- 4

select habilidade, nome_fantasia from super_herois where habilidade like '%anipulação%'; -- 5

select nome_real from super_herois where idade <= 30; -- 6

select idade, nome_real, nome_fantasia from super_herois where produtora like '%dc%'; -- 7

select filme from super_herois where produtora like '%mar%'; -- 8 

select * from super_herois where filme like '%pantera%'; -- 9

select  * from super_herois where habilidade like '%agilidade%';

