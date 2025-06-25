

# 🛍️ My-Ecomm: E-Commerce Web Application

A full-stack E-commerce application built with **React.js** for the frontend and **Node.js + Express** for the backend. This platform offers category-based product browsing, user authentication, and protected routing for an enhanced shopping experience.
---
## 🚀 Features

- 🔐 **User Authentication** (Sign In / Sign Up)
- 🔒 **Protected Routes** using JWT/session-based logic
- 🏷️ Product Categories: Electronics, Mens, Womens, Jewelry
- 🛒 Product Details Page with dynamic routing
- ☁️ Toast Notifications for quick feedback
- 📦 RESTful API built with Express

## Future Enchancement
  - 🛒 Cart & Wishlist
-  PaymentGate way Integration
---


## 🔧 Tech Stack

**Frontend**
- React.js (with React Router)
- CSS & BootStrap
- React Hot Toast

**Backend**
- Node.js
- Express.js
- CORS and JSON Middleware

---

## 🧭 Routing Overview

| Path | Description |
|------|-------------|
| `/` | Login (SignIn) |
| `/signup` | Register (SignUp) |
| `/home` | Main Product Listing |
| `/electronics` | Electronics Products |
| `/mens` | Men’s Fashion |
| `/womens` | Women’s Fashion |
| `/jewelery` | Jewelry |
| `/productdetails/:id` | Product detail view |

---

## 📂 Project Structure
/client
└── components/
└── pages/
└── App.jsx

/server
└── server.js
└── routes/

