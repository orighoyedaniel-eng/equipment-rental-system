# Equipment Rental System
Coursework project: Equipment Rental Management System  includes secure login, admin dashboard for managing inventory and users, and user dashboard for searching, renting, and returning equipment.


## Getting Started

1. Clone the Repository
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
DB_USER=root
DB_PASS=strongpassword
DB_NAME=equipment_rental


##  Troubleshooting**

### Access denied for user**
If you see:
ERROR 1698 (28000): Access denied for user 'root'@'localhost'
- Make sure you are using the correct username and password.
- If you want to use a custom user (e.g., `admin`), create it and grant privileges:
  ```sql
  CREATE USER 'admin'@'localhost' IDENTIFIED BY 'yourpassword';
  GRANT ALL PRIVILEGES ON equipment_rental.* TO 'admin'@'localhost';
  FLUSH PRIVILEGES;
Can't connect to local server through socket
If you see:
ERROR 2002 (HY000): Can't connect to local MySQL server through socket
•	Ensure MariaDB/MySQL is running: 
•	sudo service mariadb start
•	Or connect via TCP instead of socket: 
•	mysql -h 127.0.0.1 -u root -p
Import errors
If importing the .sql file fails:
•	Confirm you are running the command from your shell, not inside the MariaDB prompt: 
•	mysql -u root -p equipment_rental < equipment_rental.sql
•	Check that equipment_rental.sql exists in your project folder.
Environment variable issues
If the app cannot connect to the database:
•	Verify your .env file is in the project root.
•	Double check values: 
•	DB_HOST=127.0.0.1
•	DB_USER=root
•	DB_PASS=yourpassword
•	DB_NAME=equipment_rental




