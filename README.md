# 📝 Serverless Task Manager (AWS + React)

![Architecture Diagram](./public/Cloud_project_1.png)
*(High-level architecture of the app — React frontend, AWS serverless backend)*

## 🚀 Overview
This is a **serverless task manager app** built using **React + Vite** for the frontend and **AWS Lambda + API Gateway + DynamoDB** for the backend.
It allows users to **fetch and create tasks** through APIs.

The app is designed as a **desktop-first dashboard**, optimized for laptop/desktop users.

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, TailwindCSS
- **Backend:** AWS Lambda, API Gateway
- **Database:** DynamoDB
- **Hosting:** S3 + CloudFront
- **Monitoring:** CloudWatch

---

## ✨ Features
- 📋 Fetch tasks by user ID
- 🆕 Create new tasks via JSON payload
- 🌐 Deployed on AWS with CloudFront + S3 hosting
- 🔒 Configured **CORS** for secure frontend-backend communication
- ⚡ Optimized for desktop users

---
serverless-task-manager/
│── src/ # React frontend source code
│ ├── components/ # UI components (Task forms, Layout, etc.)
│ ├── hooks/ # Custom hooks (window width, etc.)
│ ├── types/ # TypeScript types
│ ├── utils/ # API utility functions
│ ├── App.tsx # Main app file
│ └── main.tsx # Entry point
│
│── Lambda/ # AWS Lambda functions (Python)
│ ├── Create_new_task.py
│ ├── Delete_task.py
│ ├── Get_specific_task.py
│ └── List_all_task_user.py
│
│── public/ # Architecture diagram
│ ├── Cloud_project_1.png
│
│── public/ # Static files
│── package.json # Dependencies
│── vite.config.ts # Vite config
│── README.md # Documentation


## 🚀 Deployment Steps
1. Build the frontend:
   ```bash
   npm run build

2. Deploy the frontend to S3:
   ```bash
   aws s3 sync build s3://your-bucket-name

3. Create a CloudFront distribution:
   ```bash
   aws cloudfront create-distribution --origin-domain-name your-bucket-name.s3.amazonaws.com

🧑‍💻 Author
   Built by Aadith Thillai Arasu — exploring serverless and cloud-native applications.
