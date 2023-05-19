CREATE TABLE categories (
  id_category INT AUTO_INCREMENT PRIMARY KEY,
  nm_category VARCHAR(50) NOT NULL
);

CREATE TABLE users (
  id_user INT AUTO_INCREMENT PRIMARY KEY,
  nm_first VARCHAR(50) NOT NULL,
  nm_last VARCHAR(50) NOT NULL,
  ds_email VARCHAR(100) NOT NULL UNIQUE,
  ds_password VARCHAR(255) NOT NULL
);

CREATE TABLE events (
  id_event INT AUTO_INCREMENT PRIMARY KEY,
  id_user INT,
  id_category INT,
  nm_title VARCHAR(100) NOT NULL,
  ds_description TEXT,
  ds_color VARCHAR(10) NOT NULL,
  nm_location VARCHAR(255),
  dt_start_datetime DATETIME NOT NULL,
  dt_end_datetime DATETIME NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE,
  FOREIGN KEY (id_category) REFERENCES categories(id_category) ON DELETE SET NULL
);

CREATE TABLE participants (
  id_participant INT AUTO_INCREMENT PRIMARY KEY,
  id_event INT NOT NULL,
  ds_email VARCHAR(100) NOT NULL,
  FOREIGN KEY (id_event) REFERENCES events(id_event) ON DELETE CASCADE
);
