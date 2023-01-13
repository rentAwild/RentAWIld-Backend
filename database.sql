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
    ('Abc', 'abc@email.com', 'user'),
    ('User', 'user@email.com', 'user'),
    ('Oh rent''Al', 'orental@orental.com', 'company'),
    ('Lisboa City', 'lisbonne@pt.com', 'company'),
    ('Test Company', 'company@email.com', 'company'),
    ('Admin', 'admin@email.com', 'admin');

-- FILL TABLE CARS

INSERT INTO `rentawild`.`cars`(`name`, `image`, `type`, `kilometer`, `daily_price`, `user_id`) VALUES
    ('Bentley','https://images.pexels.com/photos/9277199/pexels-photo-9277199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Luxury', '276760073', 400, 5),
    ('Tesla', 'https://images.pexels.com/photos/10029878/pexels-photo-10029878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Electric', '276760073', 300, 5),
    ('VW Van', 'https://images.pexels.com/photos/1573424/pexels-photo-1573424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Van', '276760073', 100, 5),
    ('Hyundai','https://images.pexels.com/photos/14108946/pexels-photo-14108946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'SUV', '276760073', 120, 6),
    ('Mercedes','https://images.pexels.com/photos/11742992/pexels-photo-11742992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Jeep', '276760073', 250, 6),
    ('Lamborgini','https://images.pexels.com/photos/4777369/pexels-photo-4777369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Sport', '276760073', 350, 7),
    ('BMW','https://images.pexels.com/photos/3689531/pexels-photo-3689531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Sport', '276760073', 280, 7),
    ('Ferrari','https://images.pexels.com/photos/12764907/pexels-photo-12764907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Super Sport', '276760073', 450, 7);


-- FILL TABLE BOOKS

INSERT INTO `rentawild`.`books`(`start`, `end`, `car_id`, `user_id`) VALUES
    ('2023-01-22', '2023-01-30', 1, 3);