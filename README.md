# 🚴 Bicycle Store Backend

A robust backend API for a bicycle store, built with **Node.js**, **Express**, **MongoDB**, and **JWT** authentication. It supports user and admin roles, 
product and order management, secure login/registration, and payment integration.

---

## 🌐 Live API URL

> 🔗 https://bicycle-backend-seven.vercel.app/
---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Bcrypt (for password hashing)
- Stripe / SSLCommerz / SurjoPay / AmaarPay (for payments)
- TypeScript (optional)


---

## 📌 Features

### 👥 User Authentication
- Register, Login, Logout
- Secure password hashing using bcrypt
- JWT for session handling
- Roles: `admin`, `customer`

### 🚲 Bicycles
- Create, Read, Update, Delete (CRUD)
- Fields: name, brand, model, price, stock
- Pagination support for listings

### 🧾 Orders
- CRUD operations
- Linked to user and bicycle product
- Stock check before placing orders
- Paginated order history

### 💳 Payment Integration
- Integration options:
  - ✅ Stripe
  - ✅ SSLCommerz
  - ✅ SurjoPay
  - ✅ AmaarPay

### 🔐 Route Protection
- Middleware for protected/private routes
- Admin access control for certain APIs

### ⚠️ Error Handling
- Custom error messages for:
  - Invalid login
  - Out-of-stock
  - Unauthorized access

---

## 🧪 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bicycle-store-backend.git
---

2. Install dependencies :
```bash
npm install
---

## 📌 Features

### 👥 User Authentication
- Register, Login, Logout
- Secure password hashing using bcrypt
- JWT for session handling
- Roles: `admin`, `customer`

### 🚲 Bicycles
- Create, Read, Update, Delete (CRUD)
- Fields: name, brand, model, price, stock
- Pagination support for listings

### 🧾 Orders
- CRUD operations
- Linked to user and bicycle product
- Stock check before placing orders
- Paginated order history

### 💳 Payment Integration
- Integration options:
  - ✅ Stripe
  - ✅ SSLCommerz
  - ✅ SurjoPay
  - ✅ AmaarPay

### 🔐 Route Protection
- Middleware for protected/private routes
- Admin access control for certain APIs

### ⚠️ Error Handling
- Custom error messages for:
  - Invalid login
  - Out-of-stock
  - Unauthorized access

---

3.Create .env file :

NODE_ENV=
PORT=
DATABASE_URL=
BCRYPT_SALT_ROUNDS=
DEFAULT_PASS=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
RESET_PASS_UI_LINK=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

4.Run the server :
npm run dev  # for development
# or
npm start    # for production


