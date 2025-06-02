# 🌍 East Africa Horizons

**East Africa Horizons** is a full-stack travel blogging platform designed to showcase the breathtaking landscapes, cultures, and experiences of East Africa. Built with travelers in mind, it allows users to create, explore, and interact with blog posts highlighting destinations across Kenya, Tanzania, Uganda, Rwanda, and beyond.


## ✨ Features

- 📝 User-authenticated travel blogs (create, edit, delete)
- 📸 Photo & video uploads using Multer and Cloudinary
- 💬 Commenting & liking system
- 🧑‍🤝‍🧑 Follow and unfollow users
- 🔔 Real-time notifications for likes, comments, and followers
- 🔍 Search and filter blogs by location or tags
- 📱 Fully responsive UI with mobile-first design

## 🔧 Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **Framer Motion** (animations)

### Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Multer** + **Cloudinary** (for media uploads)
- **JWT** + **bcrypt** (authentication & authorization)

## 🌐 Live Demo

🚀 [View Live App](https://eastafricahorizons.netlify.app)  
🔙 [Backend on Render/Heroku](https://eastafricahorizons-api.onrender.com)

## 📸 Screenshots

| Home Page | Blog Post Page | Profile Page |
|-----------|----------------|--------------|
| ![home](link) | ![blog](link) | ![profile](link) |

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas or local MongoDB setup
- Cloudinary account for media storage

### Clone the Repository

```bash
git clone https://github.com/yussuf3468/east-africa-horizons.git
cd east-africa-horizons
Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
Backend Setup
bash
Copy
Edit
cd server
npm install
# Create a .env file with the following:
# MONGO_URI=
# JWT_SECRET=

npm run dev
📁 Folder Structure
bash
Copy
Edit
/client      → React frontend
/server      → Express backend
/uploads     → Multer temp uploads (ignored in .gitignore)
🧪 API Endpoints
Base URL: https://eastafricahorizons-api.onrender.com/api

Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login existing user
GET	/posts	Fetch all travel blogs
POST	/posts	Create a new blog post
PUT	/posts/:id	Edit a blog post
DELETE	/posts/:id	Delete a blog post
POST	/posts/:id/like	Like a post
POST	/posts/:id/comment	Add comment to post
GET	/users/:id	Get user profile
POST	/users/:id/follow	Follow/unfollow user

🙌 Contributing
Contributions are welcome! Please fork the repo and create a pull request.

bash
Copy
Edit
# Clone and create a new branch
git checkout -b feature-name
Submit a detailed PR describing your changes.

📄 License
This project is licensed under the MIT License. See LICENSE for details.

Made with ❤️ in East Africa by Yussuf