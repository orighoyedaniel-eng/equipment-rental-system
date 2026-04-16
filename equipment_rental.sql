-- PostgreSQL schema for Equipment Rental System

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL
);

-- Equipment table
CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    serial_number VARCHAR(50) UNIQUE,
    item_condition VARCHAR(50),
    quantity INT DEFAULT 0
);

-- Rentals table
CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    equipment_id INT REFERENCES equipment(id) ON DELETE CASCADE,
    rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL
);
