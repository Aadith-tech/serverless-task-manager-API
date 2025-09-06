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
```bash
## serverless-task-manager/
│── src/                     # React frontend source code
│   ├── components/          # UI components (About, CreateTask, FetchUserTasks, etc.)
│   ├── hooks/               # Custom hooks (useWindowWidth, etc.)
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions (API fetch, etc.)
│   ├── App.tsx              # Main app component
│   └── main.tsx             # React entry point
│
│── Lambda/                  # AWS Lambda functions (Python backend)
│   ├── Create_new_task.py   # Lambda for creating tasks
│   ├── Delete_task.py       # Lambda for deleting tasks
│   ├── Get_specific_task.py # Lambda for fetching a specific task
│   └── List_all_task_user.py # Lambda for listing all tasks for a user
│
│── public/                  # Architecture diagram 
│   ├── Cloud_project_1.png
│
│
│── .gitignore               # Ignore node_modules, dist, env files
│── README.md                # Project documentation
│── package.json             # Dependencies & scripts
│── vite.config.ts           # Vite configuration
```


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
