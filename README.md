# 🚲 Bicycle Store - Backend

A powerful and secure backend for the Bicycle Store web application built with Express, TypeScript, Mongoose  and MongoDB.

---

## 🔧 Technologies Used

- **Node.js + Express**
- **TypeScript**
- **Mongoose(MongoDB)**
- **JWT Authentication**
- **Role-Based Access Control**
- **Zod / Joi Validation**
- **Cloudinary** for image uploads
- **SSLCommerz** for payment integration
- **dotenv** for environment variables

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bicycle-store-backend.git
cd bicycle-store-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
SSL_STORE_ID=<your_sslcommerz_store_id>
SSL_STORE_PASSWORD=<your_sslcommerz_store_password>
```

### 4. Start Development Server

```bash
npm run start:dev
```

### 5. Build & Run for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│ ├── builder/ # Factory or builder utilities
│ ├── config/ # Configuration files (env, DB, etc.)
│ ├── errors/ # Custom error handling
│ ├── interface/ # TypeScript interfaces
│ ├── middlewares/ # Express middlewares
│ ├── modules/ # Main domain logic
│ │ ├── auth/ # Authentication logic
│ │ ├── order/ # Order management
│ │ ├── product/ # Product CRUD
│ │ └── user/ # User management
│ ├── routes/ # API route definitions
│ └── utils/ # Helper utilities
├── types/ # Global TypeScript types
├── app.ts # Main app entry
├── server.ts # HTTP server bootstrap
```

---

## 🔐 Core Features

### ✅ Authentication

- User registration & login
- Secure password hashing with **bcrypt**
- JWT token-based auth
- Role-based access: `admin`, `customer`

### 🚴 Bicycle Management

- Admin: create/update/delete bicycles
- User: browse bicycles with filter & search
- Image uploads via Cloudinary

### 🛍️ Orders & Checkout

- Place orders (with stock checks)
- Checkout using **SSLCommerz**
- Store order and user info
- View orders (User/Admin dashboards)

### 📊 Admin Dashboard

- Total sales revenue
- Top-selling bicycles
- Units sold

---

## 📦 API Endpoints Overview

| Method | Endpoint                | Description                       |
|--------|-------------------------|-----------------------------------|
| POST   | /api/v1/auth/register   | Register new user                 |
| POST   | /api/v1/auth/login      | Login existing user               |
| GET    | /api/v1/bicycles        | Get all bicycles (public)         |
| GET    | /api/v1/bicycles/:id    | Get bicycle details               |
| POST   | /api/v1/orders          | Place an order                    |
| GET    | /api/v1/orders/my       | Get user's orders                 |
| GET    | /api/v1/dashboard/sales | Admin: Get sales data             |
| POST   | /api/v1/payments/init   | Start SSLCommerz payment          |

---

## 🌐 API Documentation

📬 **Postman Link:** _Coming Soon_  
_Add your Postman collection link here once it's ready._

---

## ✅ Available Scripts

| Command             | Description                        |
|---------------------|------------------------------------|
| `npm run start:dev` | Run development server             |
| `npm run build`     | Build TypeScript project           |
| `npm start`         | Start production server            |
| `npm run lint`      | Check lint issues                  |
| `npm run lint:fix`  | Auto-fix lint issues               |
| `npm run prettier`  | Format code with Prettier          |

---

## 🧹 Code Quality

- TypeScript for strict typing
- ESLint + Prettier integration
- RESTful structure with clear separation of concerns
- Centralized error handling and validation

---

## 📫 Test Credentials

**Admin:**
- Email: `mina@mail.com`
- Password: `1234`

**User:**
- Email: `nina@mail.com`
- Password: `1234`

---

## 🌍 Frontend Link

Live frontend: [https://bicyclestore.netlify.app](https://bicyclestore.netlify.app)

---

## 📝 License

Licensed under the **ISC License**.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

