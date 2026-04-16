# Equipment Rental System
Coursework project: Equipment Rental Management System  includes secure login, admin dashboard for managing inventory and users, and user dashboard for searching, renting, and returning equipment.


Clone the Repository
```bash
git clone https://github.com/orighoyedaniel-eng/equipment-rental-system.git
cd equipment-rental-system


Running the Backend
1.	Open Command Prompt or PowerShell.
2.	Navigate to the backend folder: 
3.	cd C:\xampp\htdocs\equipment-rental-system-main\backend
4.	Start the server: 
5.	node server.js
6.	You should see: 
7.	Database connected
8.	Server running on http://localhost:3000

Accessing the Frontend GUI
Once Apache and Node.js are running:

or

You can download and install xamp app, download the repositories from the github, unzipped and copy the unzipped folder 'equipment-rental-system-main' and paste it inside the htdocs folder on xamp directory 'C:\xampp\htdocs', start the Apache on the xamp  and run those link below on the browser.

# Equipment Rental System

## Accessing the Frontend GUI

- **Login Page** → [http://127.0.0.1/equipment-rental-system-main/frontend/login.html]

- **User Dashboard** → [http://127.0.0.1/equipment-rental-system-main/frontend/user-dashboard.html]

- **Admin Dashboard** → [http://127.0.0.1/equipment-rental-system-main/frontend/admin-dashboard.html]


Demo Accounts
•	Admin 
Email: admin@example.com 
Password: admin123
•	User 
Email: john@example.com 
Password: user123

Demo Flow
1.	Open login page → log in as admin or user.
2.	Admin dashboard → add equipment, view list, toggle dark mode, logout.
3.	User dashboard → search, rent, return equipment, view rentals, toggle dark mode, logout.
4.	Logout → returns to login page.
5.	Database updates visible in phpMyAdmin.

Requirements
•	Node.js (LTS version recommended)
•	XAMPP (Apache + MySQL)
•	npm packages: express, sequelize, mysql2, bcrypt, jsonwebtoken
