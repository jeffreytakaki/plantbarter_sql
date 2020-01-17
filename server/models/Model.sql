CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    email VARCHAR(25) UNIQUE,
    user_name VARCHAR(25) UNIQUE,
    password VARCHAR(50),
    created_at TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS plants (
    plant_id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    species VARCHAR(25) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (plant_id)
);

CREATE TABLE IF NOT EXISTS users_plants (
    plant_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id) ON DELETE CASCADE, 
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, 
    PRIMARY KEY (plant_id, user_id)
);
