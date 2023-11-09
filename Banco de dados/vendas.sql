-- MySQL Script generated by MySQL Workbench
-- Thu Nov  9 08:14:53 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`categoria` ;

CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nome_categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`produto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`produto` (
  `idproduto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `preço` FLOAT NOT NULL,
  `num_estoque` INT NOT NULL,
  `qtd_vendida` INT NOT NULL,
  `FK_categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproduto`),
  INDEX `fk_produto_categoria_idx` (`FK_categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_produto_categoria`
    FOREIGN KEY (`FK_categoria_idcategoria`)
    REFERENCES `mydb`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cliente` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `endereco_email` VARCHAR(45) NOT NULL,
  `endereco_fisico` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `mydb`.`vendas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`vendas` ;

CREATE TABLE IF NOT EXISTS `mydb`.`vendas` (
  `idvendas` INT NOT NULL AUTO_INCREMENT,
  `FK_produto_idproduto` INT NOT NULL,
  `FK_cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idvendas`),
  INDEX `fk_vendas_produto1_idx` (`FK_produto_idproduto` ASC) VISIBLE,
  INDEX `fk_vendas_cliente1_idx` (`FK_cliente_idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_vendas_produto1`
    FOREIGN KEY (`FK_produto_idproduto`)
    REFERENCES `mydb`.`produto` (`idproduto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vendas_cliente1`
    FOREIGN KEY (`FK_cliente_idcliente`)
    REFERENCES `mydb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `categoria` (`nome_categoria`) VALUES ('Camisetas');
INSERT INTO `categoria` (`nome_categoria`) VALUES ('Calças Jeans');
INSERT INTO `categoria` (`nome_categoria`) VALUES ('Vestidos');
INSERT INTO `categoria` (`nome_categoria`) VALUES ('Roupas de Exterior');
INSERT INTO `categoria` (`nome_categoria`) VALUES ('Acessórios');

insert into produto (nome, descricao, preço, num_estoque, qtd_vendida, FK_categoria_idcategoria) values ('camisa roxa', 'bordada por senhoras', 99.9,2,5,1);

insert into produto (nome, descricao, preço, num_estoque, qtd_vendida, FK_categoria_idcategoria) values ('vestido vermelho', 'roubado', 56.9,2,5,3);

insert into produto (nome, descricao, preço, num_estoque, qtd_vendida, FK_categoria_idcategoria) values ('sapato 4 leguas', 'tenis com asas', 31.90,20,5,4), 
('capa invisivel', 'harryu potter', 9999.90,80,7,4);
