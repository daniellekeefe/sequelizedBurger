DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int PRIMARY KEY AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured boolean NOT NULL DEFAULT 0,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);