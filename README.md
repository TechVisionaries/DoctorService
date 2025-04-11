# 🩺 DoctorService - MediSync Microservice

DoctorService is a Node.js and Express.js microservice that manages doctor-related data for the **MediSync** cloud-based medical appointment platform. This service provides APIs to register doctors, view all doctors, retrieve individual doctor details, and supports authentication for secure access.

---

## 📁 Project Structure

```
DoctorService/
├── config/              # DB config (MongoDB connection)
├── controllers/         # Logic for doctor & auth APIs
├── middleware/          # Auth & error handling middleware
├── models/              # Mongoose schemas (Doctor, User)
├── routes/              # API route definitions
├── .env                 # Environment variables (DO NOT COMMIT)
├── Dockerfile           # Docker config
├── .gitignore           # Files to ignore in Git
├── package.json         # Project dependencies
├── index.js             # App entry point
```

---

## 🚀 Features

- Add and manage doctors (`POST /doctors`)
- Get all doctors or specific doctor (`GET /doctors`, `GET /doctors/:id`)
- Role-based authorization (`admin` middleware)
- MongoDB Atlas integration
- Dockerized deployment-ready

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/TechVisionaries/DoctorService
cd DoctorService

# Install dependencies
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following:

```
PORT=8050
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/doctor_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ DO NOT commit your `.env` file — it's ignored by `.gitignore`

---

## 🧪 Run the App

```bash
npm start
```

---

## 🐳 Run with Docker

```bash
# Build Docker image
docker build -t doctor-service .

# Run the container
docker run -d -p 8050:8050 --env-file .env --name doctor-service doctor-service
```

---

## 🔐 API Endpoints

| Method | Endpoint             | Description            | Auth        |
|--------|----------------------|------------------------|-------------|
| POST   | `/api/auth/register` | Register new user      | ❌          |
| POST   | `/api/auth/login`    | Login existing user    | ❌          |
| GET    | `/doctors`           | Get all doctors        | ✅          |
| GET    | `/doctors/:id`       | Get doctor by ID       | ✅          |
| POST   | `/doctors`           | Create new doctor      | ✅ (admin)  |

---

## 📜 License

This project is part of the **MediSync Cloud Computing Assignment**  
**Student ID:** IT21802126  
