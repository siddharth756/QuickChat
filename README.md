# QuickChat 💬

A full-stack real-time chat application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). QuickChat supports **JWT authentication**, **real-time messaging** using **Socket.IO**, **online/offline user status**, and **32 beautiful theme variations** powered by **Zustand** state management and **Tailwind CSS**. Deployed on **Render**.

![QuickChat UI Preview](https://github.com/siddharth756/quickchat/blob/main/frontend/public/webview.png)

## 🚀 Features

- 🔐 JWT-based Authentication (Sign up, Login, Protected Routes)
- 💬 Real-time Chat with Socket.IO
- 🌐 Online/Offline User Status
- 🎨 32 Customizable Themes (Light & Dark variants)
- 🧠 State Management using Zustand
- 🧵 Fully Responsive UI with Tailwind CSS
- ☁️ Cloudinary File Upload Integration (for profile pics/messages)
- 🌍 Deployed on Render (Client + Server)
- ⚡ Optimized UX with Caching
- 📱 Mobile-Friendly Interface
- 💾 Persistent Auth Sessions

## 📁 Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Zustand (for theme and auth state)
- Axios
- Socket.IO Client

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Socket.IO Server
- Cloudinary (for media uploads)
- CORS

## 🚀 Deployment

### Platform:
- 🟪 **Render** (Client & Server)
- 🌐 Visit: [https://quickchat-y.onrender.com](https://quickchat-y6jq.onrender.com)

---

### ⚙️ Setup `.env` File

```env
MONGODB_URI=...
PORT=5000
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### 🏗️ Build the app:
```
npm run build
```

### ▶️ Start the app:
```
npm start
```

---