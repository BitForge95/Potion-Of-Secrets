# 🧪 Potion of Secrets

**Potion of Secrets** is a simple and magical web app that lets users anonymously **submit a secret** and **receive a random secret** from someone else. No accounts, no tracking — just pure, anonymous mystery.

Built with the **MERN stack** (MongoDB, Express, React, Node.js), it captures the charm of digital anonymity in a lightweight, single-page app.

---

## ✨ Features

- 🗝️ Submit a secret anonymously  
- 🔀 Retrieve a random secret from the database  
- ⚡ Instant interaction with no login or registration  
- 🎨 Clean and responsive single-page interface (React)

---

## 🛠️ Tech Stack

- **Frontend**: React  
- **Backend**: Express.js + Node.js  
- **Database**: MongoDB (via Mongoose)  
- **HTTP Client**: Axios

---

## 📦 Getting Started

### Prerequisites

- Node.js & npm installed  
- MongoDB instance running (local or MongoDB Atlas)

---

### 🔧 Installation

1. **Clone the Repository**

bash 

git clone https://github.com/yourusername/potion-of-secrets.git
cd potion-of-secrets

2.  **Backend Setup**

To get the backend up and running, ensure you have Node.js installed and a MongoDB instance ready, either locally or via a cloud provider like MongoDB Atlas. Inside the `server` directory, install dependencies by running `npm install`. Then, create a `.env` file containing your environment variables — 
for example: 
PORT=5000
MONGO_URI=your_mongodb_connection_string


Replace `your_mongodb_connection_string` with your actual connection URI. Once configured, start the backend server with `npm start`. By default, the server listens on port 5000 and exposes two main API endpoints: a POST route at `/api/secrets` to submit a new secret (send JSON with a `text` field), and a GET route at `/api/secrets/random` to retrieve a random secret from the database.

---

## Frontend Setup

For the frontend, Node.js and npm are also required. Inside the `client` directory, run `npm install` to install dependencies. Once complete, launch the React development server with `npm start`. This runs the app on `http://localhost:3000`. The frontend includes a simple interface allowing users to input a secret and share it anonymously, as well as retrieve a random secret shared by someone else. If your backend is hosted elsewhere or on a different port, you can specify the API base URL by creating a `.env` file inside the `client` folder with a variable like:

REACT_APP_API_URL=http://your-backend-url


Make sure your React app uses this environment variable when making API requests.

---

## Running the Application Locally

To run the full application locally, first make sure your MongoDB instance is running. Then start the backend server from the `server` folder and the frontend from the `client` folder simultaneously. With both servers running, open your browser at `http://localhost:3000` to interact with the app.

---

## Deployment Suggestions

For deploying your app, you can host the backend on platforms like Heroku, Render, or Railway, and the frontend on static site hosts such as Vercel or Netlify. Use MongoDB Atlas for a managed cloud database solution suitable for production environments.

---

## API Endpoints Overview

- **POST** `/api/secrets` accepts a JSON payload with a `text` field to save a new secret anonymously.  
- **GET** `/api/secrets/random` returns a JSON object containing a randomly selected secret.

---

## License

This project is licensed under the MIT License. © 2025 Your Name

---




