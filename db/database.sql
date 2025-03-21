CREATE DATABASE IF NOT EXIST companydb;
USE companydb;

CREATE TABLE employee
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id) 
);

DESCRIBE employee;

INSERT INTO employee VALUES
    ( 1, 'Joe', 1000 ),
    ( 2, 'Henry', 2500 ),
    ( 3, 'Sam', 1700 ),
    ( 4, 'Max', 3500 );