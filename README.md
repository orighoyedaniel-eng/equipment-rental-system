# Equipment Rental System
Coursework project: Equipment Rental Management System  includes secure login, admin dashboard for managing inventory and users, and user dashboard for searching, renting, and returning equipment.


## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/orighoyedaniel-eng/equipment-rental-system.git
cd equipment-rental-system
2. Install MariaDB/MySQL
Make sure you have MariaDB or MySQL installed locally.
3. Create the Database
Log into MariaDB:
mysql -u root -p
Then run:
CREATE DATABASE equipment_rental;
exit;
4. Import Schema and Sample Data
From your project folder:
mysql -u root -p equipment_rental < equipment_rental.sql
5. Verify the Import
Log back into MariaDB:
mysql -u root -p equipment_rental
Then check:
SHOW TABLES;
SELECT * FROM users;
SELECT * FROM equipment;
SELECT * FROM rentals;
6. Seed Data (Optional)
If you want to add sample records manually:
INSERT INTO users (name, email, password_hash, role)
VALUES 
  ('Admin User', 'admin@example.com', 'hashed_admin_pw', 'admin'),
  ('John Doe', 'john@example.com', 'hashed_john_pw', 'user'),
  ('Jane Smith', 'jane@example.com', 'hashed_jane_pw', 'user');

INSERT INTO equipment (name, category, serial_number, item_condition, quantity)
VALUES
  ('Excavator', 'Heavy Machinery', 'EXC-001', 'Good', 2),
  ('Concrete Mixer', 'Construction', 'CMX-101', 'Excellent', 5),
  ('Chainsaw', 'Tools', 'CHS-555', 'Fair', 10);

INSERT INTO rentals (user_id, equipment_id, rent_date, status)
VALUES
  (2, 1, NOW(), 'rented'),
  (3, 2, NOW(), 'rented'),
  (2, 3, NOW(), 'returned');
7. Configure Environment Variables
Create a .env file in the project root:
DB_HOST=127.0.0.1
DB_USER=admin
DB_PASS=strongpassword
DB_NAME=equipment_rental

