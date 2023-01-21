CREATE DATABASE db;

USE db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  phone_number varchar(255) NOT NULL,
);

CREATE TABLE reports (
  id INT NOT NULL AUTO_INCREMENT,
  user_id_reporting INT NOT NULL,
  date_created varchar(255) NOT NULL,
  status_of_report varchar(255) NOT NULL,
  last_updated varchar(255) NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (user_id_reporting) REFERENCES users(id)
);
