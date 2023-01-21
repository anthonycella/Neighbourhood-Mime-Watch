CREATE DATABASE db;

USE db;

CREATE TABLE users (
  username varchar(255) NOT NULL,
  first_name varchar(255),
  last_name varchar(255),
  phone_number varchar(255) NOT NULL,
  group_ids
  PRIMARY KEY (phone_number)
);

CREATE TABLE users_groups (
  phone_number varchar(255),
  group_id int,
)

CREATE TABLE reports (
  id INT NOT NULL AUTO_INCREMENT,
  user_reporting varchar(255) NOT NULL,
  date_created varchar(255) NOT NULL,
  report_status varchar(255) NOT NULL,
  last_updated varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE groups (
  id INT NOT NULL AUTO_INCREMENT,

)
