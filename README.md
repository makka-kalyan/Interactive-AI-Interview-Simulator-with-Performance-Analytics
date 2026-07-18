# 🚀 MERN Stack AI Interview Simulator Platform

An AI-powered mock interview platform that helps users prepare for technical interviews through realistic interview simulations, AI-generated feedback, resume-based question generation, and performance analytics.

## 🌐 Live Demo

**🔗 Deployed Application:**
https://interactive-ai-interview-simulator-with-9b7y.onrender.com/

---

## ✨ Features

* 🤖 **AI-Powered Mock Interviews**

  * Practice interviews with an AI interviewer.
  * Dynamic interview flow based on selected role and experience.

* 📄 **Resume-Based Interview Generation**

  * Upload your resume (PDF).
  * AI generates personalized interview questions based on your resume.

* 📊 **Performance Analytics**

  * View interview history.
  * Analyze scores and performance using interactive charts.
  * Download interview reports as PDF.

* 💳 **Credit-Based Interview System**

  * Purchase interview credits using Razorpay.
  * Secure payment integration.

* 🔐 **Authentication & Authorization**

  * Firebase Authentication
  * JWT-based backend authorization

* 📱 **Responsive Modern UI**

  * Built with React, Tailwind CSS, and Framer Motion.
  * Fully responsive across desktop and mobile devices.

---

# 🛠️ Tech Stack

## Frontend

* React 19 + Vite
* Redux Toolkit
* Tailwind CSS v4
* Framer Motion
* Recharts
* jsPDF & jsPDF-AutoTable
* Firebase Authentication

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Razorpay
* Multer
* PDF.js

---

# 📂 Project Structure

```text
Interactive-AI-Interview-Simulator-with-Performance-Analytics/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── index.js
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

Install the following software before running the project.

* Node.js (v16 or later)
* MongoDB (Local or MongoDB Atlas)
* Git

---

## Clone Repository

```bash
git clone https://github.com/makka-kalyan/Interactive-AI-Interview-Simulator-with-Performance-Analytics.git

cd Interactive-AI-Interview-Simulator-with-Performance-Analytics
```

---

## Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

# 🔐 Environment Variables

Create `.env` files inside both the `server` and `client` folders.

## Server (.env)

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## Client (.env)

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key

VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd server
npm run dev
```

Runs on:

```
http://localhost:8000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🌍 Deployment

The application is deployed on Render.

**Live Website**

https://interactive-ai-interview-simulator-with-9b7y.onrender.com/

---

# 📈 Future Enhancements

* AI voice-based interviews
* Video interview recording
* Company-specific interview preparation
* Coding interview environment
* Leaderboards and rankings
* Interview scheduling
* Email report generation

---

# 📝 Git Ignore Note

If `.env` files are accidentally tracked by Git, remove them from version control.

```bash
git rm --cached client/.env server/.env
git commit -m "Remove .env files from Git tracking"
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Kalyan M**

GitHub: https://github.com/makka-kalyan
