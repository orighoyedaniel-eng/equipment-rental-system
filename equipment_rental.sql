CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password_hash TEXT,
  role VARCHAR(20)
);

CREATE TABLE equipment (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(50),
  serial_number VARCHAR(50),
  item_condition VARCHAR(50),
  quantity INT
);

CREATE TABLE rentals (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  equipment_id INT REFERENCES equipment(id),
  rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20)
);
