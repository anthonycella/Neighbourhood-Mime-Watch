CREATE DATABASE db;

USE db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(255),
  first_name varchar(255),
  last_name varchar(255),
  phone_number varchar(255) NOT NULL,
);

CREATE TABLE reports (
  id INT NOT NULL AUTO_INCREMENT,
  user_reporting varchar(255) NOT NULL,
  date_created varchar(255) NOT NULL,
  status_of_report varchar(255) NOT NULL,
  last_updated varchar(255) NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (user_reporting) REFERENCES users(username)
);
