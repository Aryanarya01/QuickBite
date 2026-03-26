 # QuickBite 🍔

**Full Stack Food Ordering Application** using React, TypeScript, Node.js, Express, and MongoDB.

---

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
