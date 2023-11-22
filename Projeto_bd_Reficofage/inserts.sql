-- Inserts

INSERT INTO `seresVivos`.`Reino` (`nome`) VALUES 
('Animal'), ('Planta'), ('Fungi'), ('Protista'), ('Monera');

INSERT INTO `seresVivos`.`Filo` (`nome`, `FK_Reino_idReino`) VALUES 
('Chordata', 1), ('Arthropoda', 1), ('Ascomycota', 3), ('Bacillariophyta', 2),
 ('Porifera', 1), ('Cyanobacteria', 5), ('Euglenozoa', 4), ('Magnoliophyta', 2), ('Zygomycota', 3), ('Amoebozoa', 4);

INSERT INTO `seresVivos`.`Classe` (`nome`, `FK_Filo_idFilo`) VALUES 
('Mammalia', 1), ('Insecta', 2), ('Arachnida', 2), ('Aves', 1), ('Malacostraca', 2),
 ('Lecanoromycetes', 3), ('Actinopterygii', 1), ('Magnoliopsida', 8), ('Eurotiomycetes', 6),
 ('Mammalia', 1), ('Insecta', 2), ('Arachnida', 2), ('Aves', 1), ('Malacostraca', 2), ('Lecanoromycetes', 3);

INSERT INTO `seresVivos`.`Ordem` (`nome`, `FK_Classe_idclasse`) VALUES 
('Carnivora', 1), ('Coleoptera', 2), ('Araneae', 3), ('Passeriformes', 4), 
('Decapoda', 5), ('Pezizales', 6), ('Cypriniformes', 7), ('Asterales', 8), ('Capnodiales', 9), 
('Cetacea', 1), ('Lepidoptera', 2), ('Scorpiones', 3), ('Falconiformes', 4), ('Isopoda', 5), ('Teloschistales', 6);

INSERT INTO `seresVivos`.`Familia` (`nome`, `FK_ordem_idordem`) VALUES 
('Felidae', 1), ('Canidae', 1), ('Scarabaeidae', 2), ('Salticidae', 3), ('Paridae', 4), 
('Astacidae', 5), ('Asteraceae', 8), ('Dermateaceae', 9), ('Delphinidae', 10), ('Hesperiidae', 11), 
('Buthidae', 12), ('Accipitridae', 13), ('Porcellionidae', 14), ('Lecanoraceae', 15);

INSERT INTO `seresVivos`.`Genero` (`nome`, `origem_geografica`, `FK_Familia_idFamilia`) VALUES 
('Panthera', 'Global', 1), ('Canis', 'Global', 2), ('Cantharis', 'Global', 3), ('Puma', 'América', 4), 
('Homo', 'Global', 5), ('Aster', 'Global', 8), ('Dermatea', 'Global', 9), ('Tursiops', 'Global', 10), 
('Hesperiis', 'Global', 11), ('Androctonus', 'África', 12), ('Aquila', 'Global', 13), ('Porcellio', 'Global', 14), ('Lecanora', 'Global', 15);

-- Inserts para a tabela Especie
INSERT INTO `seresVivos`.`Especie` (`nome`, `populacao`, `FK_Genero_idgenero`)
VALUES
('Panthera leo', 20000, 14),
('Canis lupus', 50000, 15),
('Cantharis sp.', 100000, 17),
('Puma concolor', 15000, 16),
('Homo sapiens', 7700000000,18),
('Aster amellus', 20000000, 22),
('Dermatea magnoliae', 1000000, 19),
('Tursiops truncatus', 500000, 20),
('Hesperiis viridis', 30000, 21),
('Androctonus australis', 100000, 23),
('Aquila chrysaetos', 2000, 24),
('Porcellio scaber', 100000000, 25),
('Lecanora muralis', 5000000, 26);


 
 INSERT INTO `seresVivos`.`Habitat` (`nome`, `descricao`, `tipo_terreno`) VALUES 
('Savana', 'Ecossistema aberto com gramíneas altas', 'Terrestre'),
 ('Floresta Tropical', 'Região com alta biodiversidade', 'Terrestre'),
 ('Recife de Coral', 'Ecossistema marinho com estruturas calcárias', 'Aquático'), 
 ('Deserto', 'Região com baixa precipitação pluviométrica', 'Terrestre'), ('Taiga', 'Floresta boreal', 'Terrestre');

INSERT INTO `seresVivos`.`PadraoReproducao` (`tipo`) VALUES 
('Sexuada'), ('Assexuada');

INSERT INTO `seresVivos`.`Alimentacao` (`tipo`) VALUES 
('Herbívora'), ('Carnívora'), ('Onívora'), ('Frugívora'), ('Detritívora'), ('Insectívora'), ('Nectarívora');

INSERT INTO `seresVivos`.`Animal` (`nome`, `sexo`, `FK_Especie_idEspecie`, `FK_Habitat_idHabitat`, `FK_PadraoReproducao_idPadraoReproducao`, `FK_Alimentacao_idAlimentacao`) VALUES 
('Leão', 'Macho', 92, 1, 1, 2),
('Lobo Cinzento', 'Macho', 93, 4, 1, 3),
('Cão', 'Macho', 94, 3, 1, 3),
('Baleia Jubarte', 'Fêmea', 95, 4, 1, 1),
('Elefante', 'Macho', 96, 4, 2, 4),
('Cobra', 'Fêmea', 97, 2, 2, 5),
('Aracnídeo Saltador', 'Não se aplica', 98, 2, 2, 5),
('Pantera Negra', 'Fêmea', 99, 1, 1, 2),
('Águia Real', 'Fêmea', 100, 4, 2, 3),
('Escorpião Imperador', 'Macho', 101, 3, 1, 3),
('Criança', 'Não se aplica', 102, 1, 1, 1),
('Girafa', 'Fêmea', 103, 4, 2, 7),
('Cogumelo Lecanora', 'Não se aplica', 103, 2, 2, 4),
('Lobo Marinho', 'Fêmea', 104, 3, 1, 1),
('Borboleta Monarca', 'Fêmea', 98, 4, 1, 6);

INSERT INTO `seresVivos`.`DoencasTransmissiveis` (`nome`, `descricao`) VALUES 
('Raiva', 'Afeta o sistema nervoso central'),
('Parvovirose Canina', 'Infecção viral'),
('Panleucopenia Felina (FeLV)', 'Problemas imunológicos'),
('Tosse dos Canis', 'Infecção respiratória em cães'),
('Leptospirose', 'Infecção bacteriana'),
('Micose (Dermatofitose)', 'Infecção fúngica que afeta a pele'),
('Tuberculose', 'Doença bacteriana'),
('Doença de Newcastle', 'Infecção viral que afeta aves');

INSERT INTO `seresVivos`.`Animal_has_DoencasTransmissiveis` (`Animal_idAnimal`, `DoencasTransmissiveis_idDoencasTransmissiveis`) VALUES
(106, 1), -- Leão com Raiva
(108, 4), -- Lobo Cinzento com Tosse dos Canis
(109, 2), -- Cão com Parvovirose Canina
(110, 7), -- Baleia Jubarte com Tuberculose Bovina
(111, 5), -- Humano com Leptospirose
(112, 6), -- Flor Aster com Micose (Dermatofitose)
(113, 8), -- Aracnídeo Saltador com Doença de Newcastle
(114, 3); -- Pantera Negra com Panleucopenia Felina (FeLV)



