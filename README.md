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

- View all doctors (`GET /doctors`)
- View doctor by ID (`GET /doctors/:id`)
- Add new doctor (admin only) (`POST /doctors`)
- Update doctor info (admin only) (`PUT /doctors/:id`)
- Delete doctor (admin only) (`DELETE /doctors/:id`)
- JWT-based role authentication (`isAdmin`)
- Dockerized with CI/CD via GitHub Actions

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

Create a `.env` file in the root directory with:

```
PORT=8050
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/doctor_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Do NOT commit this file — it's in `.gitignore`

---

## 🧪 Run the App

```bash
nodemon index.js
```

---

## 🐳 Run with Docker

```bash
# Build Docker image
docker build -t sandithya/doctorservice .

# Run Docker container
docker run -d -p 3000:3000 --env-file .env sandithya/doctorservice
```

---

## 🔄 CI/CD Pipeline

This service uses **GitHub Actions** to:

- Build Docker image  
- Authenticate with DockerHub  
- Push image to DockerHub  

Secrets required:
- `DOCKER_USERNAME` – your DockerHub username  
- `DOCKER_PASSWORD` – DockerHub access token (Read/Write)

Workflow file: `.github/workflows/deploy.yml`

---

## ☁️ Cloud Deployment

Supports deployment on:

- Azure Container Apps  
- AWS ECS / Fargate  
- Google Cloud Run  

### Sample Azure CLI

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

| Method | Endpoint         | Description              | Auth Required |
|--------|------------------|--------------------------|---------------|
| GET    | `/doctors`       | Get all doctors          | ❌ No         |
| GET    | `/doctors/:id`   | Get doctor by ID         | ❌ No         |
| POST   | `/doctors`       | Add new doctor           | ✅ Admin only |
| PUT    | `/doctors/:id`   | Update doctor details    | ✅ Admin only |
| DELETE | `/doctors/:id`   | Delete doctor            | ✅ Admin only |

---

## 🔐 Security

- JWT authentication  
- Admin-only routes via `isAdmin` middleware  
- Secrets managed via `.env`  
- DevSecOps tools (SonarCloud/Snyk) supported

---

## 👨‍💻 Author

**Silva G. M. S. S**  
**Student ID:** IT21802126  
**Project:** MediSync - Cloud-Based Medical Appointment Platform
