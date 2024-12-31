# ZOMATO.com Clone

A fully functional clone of **Zomato.com** built using the MERN stack (MongoDB, Express.js, React, and Node.js). This application replicates Zomato's core functionalities, including restaurant browsing, order management, and real-time communication, while incorporating a restaurant management portal for seamless operations.

---

## **Key Features**

### **Customer Web App**
- **User Authentication**: Secure login and registration using JWT.
- **Browse Restaurants**: Search and filter restaurants by location.
- **View Menus**: Explore restaurant menus and select items.
- **Cart Management**: Add, update, or remove items in the cart.
- **Order Management**: Place, cancel, and track orders in real-time.
- **Chat Support**: Communicate with support agents via live chat.

### **Restaurant Management Web App**
- **Restaurant Authentication**: Secure access for restaurant owners.
- **Profile Management**: Update restaurant details and profiles.
- **Menu Management**: Add, edit, or delete menu items with prices.
- **Order Handling**: Process and update order statuses.
- **Real-Time Updates**: Receive live order notifications via WebSockets.

---

## **Tech Stack**
- **Frontend**: React, TailwindCSS (or Bootstrap), Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Real-Time Features**: Socket.io
- **Data Generation**: Faker.js

---

## **Installation Instructions**

### **Clone the Repository**
```bash
git clone https://github.com/Kunalverma45/ZOMATO.com.git
cd ZOMATO.com


Set Up the Backend
Navigate to the backend directory:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file with the following variables:
makefile
Copy code
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000
Start the backend server:
bash
Copy code
npm start
Set Up the Frontend
Navigate to the frontend directory:
bash
Copy code
cd ../frontend
Install dependencies:
bash
Copy code
npm install
Start the React app:
bash
Copy code
npm start
Generate Sample Data
Use Faker.js or a custom script to populate your database with sample restaurants and menus.

API Endpoints
Authentication
POST /api/auth/register: Register a new user/restaurant.
POST /api/auth/login: Login with email and password.
Customer App
GET /api/restaurants: Fetch all restaurants.
GET /api/restaurants/:id: Fetch restaurant details.
POST /api/orders: Place a new order.
GET /api/orders/:id: Get order details.
Restaurant Management
POST /api/restaurant/profile: Create or update a restaurant profile.
POST /api/restaurant/menu: Add menu items.
GET /api/restaurant/orders: Fetch restaurant-specific orders.
Project Structure
bash
Copy code
zomato-clone/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── .env
├── README.md
└── package.json
Milestones
Week 1: Setup and Authentication
Project setup and environment configuration.
Implement JWT-based authentication.
Week 2: Restaurant and Menu Management
Customer portal: Restaurant browsing.
Restaurant portal: Profile and menu management.
Week 3: Order Functionality
Customer portal: Place and track orders.
Restaurant portal: Process and update order statuses.
Week 4: Advanced Features
Add chat support and real-time notifications.
Refine UI/UX and finalize deployment.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add new feature"
Push to your branch:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
Name: Kunal Verma
GitHub: Kunalverma45
Email: kv47871@gmail.com
