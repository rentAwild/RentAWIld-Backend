-- INIT DB

DROP DATABASE IF EXISTS `rentawild`;
DROP TABLE IF EXISTS `rentawild`.`books`;
DROP TABLE IF EXISTS `rentawild`.`cars`;
DROP TABLE IF EXISTS `rentawild`.`users`;

CREATE DATABASE `rentawild`;

-- CREATE TABLES

CREATE TABLE `rentawild`.`users` (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
`mail` VARCHAR(255) NOT NULL,
`type` VARCHAR(255) NOT NULL
);

CREATE TABLE `rentawild`.`cars` (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
`image` VARCHAR(255) DEFAULT 'https://media.istockphoto.com/id/458537935/photo/thomas-engine-toy.jpg?s=612x612&w=0&k=20&c=eQ9lfd4Bj9X70MFpxVRr1HeUXSc7Q9Cyt_O7-VlJtk0=',
maintenance BOOLEAN DEFAULT 0,
`type` VARCHAR(255) NOT NULL,
kilometer INT DEFAULT 0,
daily_price FLOAT(10, 2) DEFAULT 0,
`user_id` INT NOT NULL,
   CONSTRAINT `fk_user_id_car`
    FOREIGN KEY (`user_id`)
    REFERENCES `rentawild`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE `rentawild`.`books` (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`start` DATE NOT NULL,
`end` DATE NULL,
`car_id` INT NOT NULL,
`user_id` INT NOT NULL,
   CONSTRAINT `fk_car_id`
    FOREIGN KEY (`car_id`)
    REFERENCES `rentawild`.`cars` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
   CONSTRAINT `fk_user_id_book`
    FOREIGN KEY (`user_id`)
    REFERENCES `rentawild`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- FILL TABLE USERS

INSERT INTO `rentawild`.`users`(`name`, `mail`, `type`) VALUES
    ('Raquel', 'raqs@gmail.com', 'user'),
    ('Antonio', 'antonio@architech.com', 'user'),
    ('Oh rent''Al', 'orental@orental.com', 'company'),
    ('Lisboa City', 'lisbonne@pt.com', 'company'),
    ('Admin', 'admin@email', 'admin');

-- FILL TABLE CARS

INSERT INTO `rentawild`.`cars`(`name`, `type`, `kilometer`, `daily_price`, `user_id`) VALUES
    ('Thomas the train', 'Alive loco', '276760073', 15.5, 3),
    ('Rapid car', 'Sport', '276760073', 15.5, 3),
    ('Slow car', 'Not sporty', '276760073', 15.5, 3),
    ('Oren''s car', 'Cool car', '276760073', 15.5, 4),
    ('Ford Focus', 'Berlin compact', '276760073', 15.5, 4),
    ('BMW 7 (no indicators included)', 'Berlin', '276760073', 15.5, 4),
    ('Citroen C4', 'Berlin compact', '276760073', 15.5, 4),
    ('Thomas the train (again)', 'Alive loco', '276760073', 15.5, 4);


-- FILL TABLE BOOKS

INSERT INTO `rentawild`.`books`(`start`, `end`, `car_id`, `user_id`) VALUES
    ('2023-01-22', '2023-01-30', 1, 3);