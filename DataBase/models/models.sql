-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema app_restaurante
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema app_restaurante
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `app_restaurante` DEFAULT CHARACTER SET utf8 ;
USE `app_restaurante` ;

-- -----------------------------------------------------
-- Table `app_restaurante`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_restaurante`.`usuario` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NULL,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));


-- -----------------------------------------------------
-- Table `app_restaurante`.`comida_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_restaurante`.`comida_categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `app_restaurante`.`comida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_restaurante`.`comida` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `precio` INT NOT NULL,
  `cantidad` INT NOT NULL DEFAULT 0,
  `imagen` TEXT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categoria_id`),
  INDEX `fk_comida_comida_categoria1_idx` (`categoria_id` ASC),
  CONSTRAINT `fk_comida_comida_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `app_restaurante`.`comida_categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `app_restaurante`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_restaurante`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_pedido_usuario1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `app_restaurante`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `app_restaurante`.`pedido_has_comida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_restaurante`.`pedido_has_comida` (
  `pedido_id` INT NOT NULL,
  `comida_id` INT NOT NULL,
  PRIMARY KEY (`pedido_id`, `comida_id`),
  INDEX `fk_pedido_has_comida_comida1_idx` (`comida_id` ASC),
  INDEX `fk_pedido_has_comida_pedido_idx` (`pedido_id` ASC),
  CONSTRAINT `fk_pedido_has_comida_pedido`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `app_restaurante`.`pedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_has_comida_comida1`
    FOREIGN KEY (`comida_id`)
    REFERENCES `app_restaurante`.`comida` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `app_restaurante`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_restaurante`.`factura` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `detalles` TEXT NULL,
  `total` INT NOT NULL DEFAULT 0,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `pedido_id` INT NOT NULL,
  `pedido_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `pedido_id`, `pedido_usuario_id`),
  INDEX `fk_factura_pedido1_idx` (`pedido_id` ASC, `pedido_usuario_id` ASC),
  CONSTRAINT `fk_factura_pedido1`
    FOREIGN KEY (`pedido_id` , `pedido_usuario_id`)
    REFERENCES `app_restaurante`.`pedido` (`id` , `usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
