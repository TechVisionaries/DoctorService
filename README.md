# 🩺 DoctorService - MediSync Microservice

DoctorService is a Node.js and Express.js microservice that manages doctor-related data for the **MediSync** cloud-based medical appointment platform. This service provides APIs to register doctors, view all doctors, retrieve individual doctor details, and supports authentication for secure access

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

````

---

## 🚀 Features

- View all doctors (`GET /doctors`)  
- View doctor by ID (`GET /doctors/:id`)  
- Add new doctor (admin only) (`POST /doctors`)  
- Update doctor info (admin only) (`PUT /doctors/:id`)  
- Delete doctor (admin only) (`DELETE /doctors/:id`)  
- JWT-based role authentication with `isAdmin` middleware  
- Dockerized and auto-deployable  
- SonarCloud integration for DevSecOps analysis

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/TechVisionaries/DoctorService.git
cd DoctorService

# Install dependencies
npm install
````

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with:

```env
PORT=8050
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/doctor_DB?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ This file is excluded via `.gitignore` and should never be committed.

---

## 🧪 Run the App Locally

```bash
nodemon index.js
```

---

## 🐳 Run with Docker

```bash
# Build Docker image
docker build -t sandithya/doctorservice .

# Run Docker container
docker run -d -p 8050:8050 --env-file .env sandithya/doctorservice
```

---

## 🔄 CI/CD Pipeline

This service uses **GitHub Actions** to:

* Build Docker image
* Authenticate with DockerHub
* Push image to DockerHub
* Run SonarCloud quality checks

### 🔐 Secrets Required

| Name              | Purpose                |
| ----------------- | ---------------------- |
| `DOCKER_USERNAME` | DockerHub login        |
| `DOCKER_PASSWORD` | DockerHub access token |
| `SONAR_TOKEN`     | SonarCloud auth token  |

> Workflow file path: `.github/workflows/deploy.yml`

---

## ☁️ Cloud Deployment

### ✅ AWS ECS Fargate with Application Load Balancer

Deployed at:
🔗 [`http://medisync-loadbalancer-155559871.us-east-1.elb.amazonaws.com/doctors/`](http://medisync-loadbalancer-155559871.us-east-1.elb.amazonaws.com/doctors/)

#### AWS Settings:

* **Cluster**: `MediSyncCluster`
* **Service**: `doctor-service-task-service`
* **Target Group**: `doctor-service-target-group`
* **Listener**: Port 80 → forwards `/doctors` path
* **Port**: 8050 (container)

---

## 📬 API Endpoints

| Method | Endpoint       | Description           | Auth Required |
| ------ | -------------- | --------------------- | ------------- |
| GET    | `/doctors`     | Get all doctors       | ❌ No          |
| GET    | `/doctors/:id` | Get doctor by ID      | ❌ No          |
| POST   | `/doctors`     | Add new doctor        | ✅ Admin only  |
| PUT    | `/doctors/:id` | Update doctor details | ✅ Admin only  |
| DELETE | `/doctors/:id` | Delete doctor         | ✅ Admin only  |

---

## 🔐 Security

* JWT-based authentication
* Role-based access control using middleware
* Environment variables used for secret management
* Secure Docker deployment
* SonarCloud/Snyk integration for DevSecOps analysis


---

## 👨‍💻 Author

**Name**: Silva G M S S  
**Student ID**: IT21802126  
**Project**: MediSync - Cloud-Based Medical Appointment Platform  

---