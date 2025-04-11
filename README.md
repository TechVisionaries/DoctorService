# 🩺 DoctorService - MediSync Microservice

DoctorService is a Node.js and Express.js microservice that manages doctor-related data for the **MediSync** cloud-based medical appointment platform. This service provides APIs to register doctors, view all doctors, retrieve individual doctor details, and supports authentication for secure access.

---

## 📁 Project Structure

```
DoctorService/
├── config/              # MongoDB connection config
├── controllers/         # Business logic for doctors
├── middleware/          # Auth & error handling
├── models/              # Mongoose schemas
├── routes/              # API endpoints
├── .github/workflows/   # CI/CD pipeline config
├── Dockerfile           # Docker container definition
├── index.js             # App entry point
└── .env                 # Environment variables (not committed)
```

---

## 🚀 Features

- View list of all doctors: `GET /doctors`
- View individual doctor by ID: `GET /doctors/:id`
- Register a new doctor (admin only): `POST /doctors`
- Secured using JWT-based admin access
- Built using Express.js and MongoDB
- Fully containerized with Docker
- CI/CD pipeline using GitHub Actions + DockerHub

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/TechVisionaries/DoctorService.git
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
nodemon index.js
```

---

## 🐳 Run with Docker

```bash
# Build Docker Image
docker build -t sandithya/doctorservice .

# Run Container Locally
docker run -d -p 8050:8050 --env-file .env sandithya/doctorservice
```

---

## 🔄 CI/CD Pipeline

A GitHub Actions workflow is configured to:

- Build the Docker image  
- Authenticate with DockerHub  
- Push the image to DockerHub  

> Located at: `.github/workflows/deploy.yml`

You must configure these GitHub Secrets:

- `DOCKER_USERNAME` – Your DockerHub username  
- `DOCKER_PASSWORD` – A DockerHub access token (Read/Write)

---

## ☁️ Cloud Deployment

This microservice is designed to be deployed on:

- Azure Container Apps  
- AWS ECS / Fargate  
- Google Cloud Run  

### Sample Azure CLI Command

```bash
az containerapp create \
  --name doctor-service \
  --resource-group doctor-rg \
  --environment doctor-env \
  --image sandithya/doctorservice:latest \
  --target-port 3000 \
  --ingress external \
  --registry-server docker.io
```

---

## 📬 API Endpoints

| Method | Endpoint       | Description            | Auth Required |
|--------|----------------|------------------------|---------------|
| GET    | `/doctors`     | Get all doctors        | ❌ No         |
| GET    | `/doctors/:id` | Get doctor by ID       | ❌ No         |
| POST   | `/doctors`     | Add new doctor (admin) | ✅ Yes        |

---

## 🔐 Security

- Admin access via JWT tokens  
- `.env` for secrets (never committed)  
- Role-based access control (`isAdmin`)  
- DevSecOps: SonarCloud or Snyk integration ready  

---

## 👨‍💻 Author

**Silva G. M. S. S**  
**Student ID:** IT21802126  
**Group Project:** MediSync - Cloud-Based Medical Appointment Platform
