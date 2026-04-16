-- sql schema for Equipment Rental System

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL
);


INSERT INTO users (name, email, password_hash, role)
VALUES 
  ('Admin User', 'admin@example.com', 'hashed_admin_pw', 'admin'),
  ('John Doe', 'john@example.com', 'hashed_john_pw', 'user'),
  ('Jane Smith', 'jane@example.com', 'hashed_jane_pw', 'user');


-- Equipment table
CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    serial_number VARCHAR(50) UNIQUE,
    item_condition VARCHAR(50),
    quantity INT DEFAULT 0
);

INSERT INTO equipment (name, category, serial_number, item_condition, quantity)
VALUES
  ('Excavator', 'Heavy Machinery', 'EXC-001', 'Good', 2),
  ('Concrete Mixer', 'Construction', 'CMX-101', 'Excellent', 5),
  ('Chainsaw', 'Tools', 'CHS-555', 'Fair', 10);

-- Rentals table
CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    equipment_id INT REFERENCES equipment(id) ON DELETE CASCADE,
    rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL
);

INSERT INTO rentals (user_id, equipment_id, rent_date, status)
VALUES
  (2, 1, NOW(), 'rented'),
  (3, 2, NOW(), 'rented'),
  (2, 3, NOW(), 'returned');
