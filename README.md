 # QuickBite 🍔

**Full Stack Food Ordering Application** using React, TypeScript, Node.js, Express, and MongoDB.

---
<img width="1901" height="922" alt="Screenshot 2026-03-23 182553" src="https://github.com/user-attachments/assets/79c1f15f-6782-4c38-bb08-58c9525b7def" />

<img width="1899" height="925" alt="Screenshot 2026-03-23 182638" src="https://github.com/user-attachments/assets/6c5ba3ec-ace3-4fa8-a86a-9580e24f1df8" />

<img width="1900" height="929" alt="Screenshot 2026-03-23 182727" src="https://github.com/user-attachments/assets/4b859ad5-057d-429f-8c5b-a8824fb285c7" />

<img width="1906" height="927" alt="Screenshot 2026-03-23 182831" src="https://github.com/user-attachments/assets/5c588fb3-636d-4966-90b8-d0440763ae60" />

<img width="1892" height="916" alt="Screenshot 2026-03-23 183041" src="https://github.com/user-attachments/assets/ed5f6f58-5e72-4432-ba48-17bcef24ee1d" />

## 🚀 Features

### User Side
- Signup & Login with JWT authentication
- Browse foods by category
- Add to Cart / Remove from Cart
- Place Orders
- View order history

### Admin Side
- Add, Edit & Delete Food Items
- View all orders
- Update order status (Pending → Preparing → Delivered)

---

## 🛠 Tech Stack
- **Frontend:** React, TypeScript, React Router, Fetch
- **Backend:** Node.js, Express, MongoDB, JWT
- **Styling:** Tailwind CSS / CSS
- **Tools:** Postman / Hoppscotch (API testing)

---

## 📂 Folder Structure


backend/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.ts
frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── api/
│ ├── context/
│ ├── types/
│ └── App.tsx


---

## 🔑 Getting Started

### Backend
1. Clone repo
2. Install dependencies
   ```bash
   cd backend
   npm install

Add .env file with:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

Run server

npm run dev
Frontend

Navigate to frontend

cd frontend
npm install
npm run dev
Open in browser: http://localhost:5173 (vite default)

🎯 How it Works
User signs up / logs in.
User browses food items and adds to cart.
On checkout, order is saved in MongoDB.
Admin can manage menu and update order statuses.
Users can view their past orders.
