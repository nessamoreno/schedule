CREATE DATABASE schedule3;

USE schedule3;

CREATE TABLE participants (
    id  INT(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(50),
    identification INT(11) NOT NULL UNIQUE,
    age INT(4) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE events(
    id INT(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(50),
    theme VARCHAR(50) NOT NULL,
    description VARCHAR(225) NOT NULL,
    start_date DATETIME,
    final_date DATETIME,
    PRIMARY KEY(id)
 );

CREATE TABLE part_even (
    id INT(11) NOT NULL AUTO_INCREMENT,
    part_id INT(11) NOT NULL,
    even_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (part_id) REFERENCES participants(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (even_id) REFERENCES events(id) ON UPDATE CASCADE ON DELETE CASCADE
);
