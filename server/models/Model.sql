CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    username VARCHAR(50) UNIQUE,
    image_url VARCHAR(200),
    password VARCHAR(200),
    created_at TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS plant_category (
    category_id INT AUTO_INCREMENT,
    category_name VARCHAR(50),
    category_type VARCHAR(50) NOT NULL UNIQUE,
    category_short_description VARCHAR(250),
    category_long_description VARCHAR(500),
    PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS plants (
    plant_id INT AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    type VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    plant_short_description VARCHAR(1250),
    plant_long_description VARCHAR(2000),
    image_url VARCHAR(200) NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (plant_id),
    FOREIGN KEY (category_id) REFERENCES plant_category(category_id)
);


CREATE TABLE IF NOT EXISTS users_plants (
    plant_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id), 
    FOREIGN KEY (user_id) REFERENCES users(user_id), 
    PRIMARY KEY (plant_id, user_id)
);

INSERT IGNORE INTO plant_category (category_type) VALUES ('Annuals');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Bulbs');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Cactus');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Climbers');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Conifers');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Ferns');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Fruit');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Herbs');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Ornamental Grasses');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Perennials');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Roses');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Shrubs');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Trees');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Palms - Cycades');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Bamboos');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Vegetables');