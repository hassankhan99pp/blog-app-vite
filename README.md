# Blog-app-vite

A full-stack blog application built with MERN stack. It includes role-based login, Admin and Author panels, dynamic routing using React Router's `Outlet`, and full CRUD functionality for blog posts.

## 🔑 Features

- 🔐 Login System with role-based access
- 🧑‍💻 Admin Panel – manage all posts and users
- ✍️ Author Panel – manage personal blog posts
- 📄 Full CRUD (Create, Read, Update, Delete) for blogs
- 🧭 React Router `Outlet` for nested routes
- 🗂️ Well-structured project folders..

## 🚀 Technologies Used

- **Frontend:** React, React Router, Bootstrap

## 📦 How to Run

```bash
# Clone the repo
git clone https://github.com/your-username/blog-app.git
cd blog-app-vite

# Install dependencies
npm i
npm run dev // it will run frontend code

# for backend 
cd data
 npx json-server --watch db.json --port 8000
