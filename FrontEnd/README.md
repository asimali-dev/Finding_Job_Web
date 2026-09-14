# 🚀 NexHire — Modern Job Recruitment Platform

<div align="center">

### Find Talent. Discover Opportunities. Build Careers.

**NexHire** is a full-stack job recruitment platform designed to connect job seekers with recruiters through a modern, responsive and user-friendly hiring experience.

</div>

---

## 📌 About NexHire

NexHire is a full-stack recruitment platform where **students/job seekers can discover and apply for jobs**, while **recruiters can create companies, post jobs, manage applicants, review resumes and accept or reject applications**.

The project was built to provide a complete recruitment workflow from **user authentication → profile creation → job discovery → application → applicant management → hiring decision**.

The frontend focuses on a clean and responsive user experience, while the backend provides authentication, REST APIs, database management and secure application handling.

---

## ✨ Features

### 👨‍💻 For Job Seekers

* 🔐 User registration and login
* 🔑 JWT-based authentication
* 👤 Profile management
* 🖼️ Profile picture upload
* 📄 Resume/CV upload
* 🛠️ Skills management
* 📝 Bio and personal information
* 🔎 Search jobs
* 📍 Filter jobs by location
* 💼 Filter jobs by job role
* 💰 Filter jobs by salary
* 📋 View complete job details
* 🚀 Apply for jobs
* ⛔ Prevent duplicate applications
* 📊 Track applied jobs
* ✅ Check application status
* ❌ See rejected applications
* 📱 Responsive experience on mobile, tablet and desktop

---

### 🏢 For Recruiters

* 🔐 Recruiter authentication
* 📊 Recruiter dashboard
* 🏢 Create and manage companies
* 💼 Create and manage jobs
* 👥 View applicants for a specific job
* 👤 View applicant information
* 🖼️ View applicant profile picture
* 📄 View applicant resume
* ⬇️ Download applicant resume
* ✅ Accept applications
* ❌ Reject applications
* 📌 Track applicant status
* 📱 Responsive admin interface

---

## 🔄 Application Workflow

### Job Seeker

```text
Register
   ↓
Login
   ↓
Create / Update Profile
   ↓
Upload Profile Picture + Resume
   ↓
Browse Jobs
   ↓
Search / Filter Jobs
   ↓
View Job Details
   ↓
Apply for Job
   ↓
Track Application
   ↓
Accepted / Rejected / Pending
```

### Recruiter

```text
Register as Recruiter
   ↓
Login
   ↓
Recruiter Dashboard
   ↓
Create Company
   ↓
Create Job
   ↓
View Applicants
   ↓
Review Applicant Profile
   ↓
View / Download Resume
   ↓
Accept / Reject Application
```

---

# 🛠️ Technologies Used

## Frontend

* **React.js**
* **React Router DOM**
* **Redux Toolkit**
* **Axios**
* **Tailwind CSS**
* **Vite**
* **Lucide React**
* **Sonner**
* **Shadcn/UI**
* **AOS — Animate On Scroll**

### Frontend responsibilities

The frontend handles:

* User interface
* Routing
* Authentication state
* Job search and filtering
* Company management UI
* Applicant management
* Profile management
* Resume interaction
* Responsive layouts
* Animations and notifications

---

## Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcrypt**
* **Cookie-based authentication**
* **REST APIs**

### Backend responsibilities

The backend handles:

* User authentication
* Authorization
* User profiles
* Company management
* Job management
* Job applications
* Applicant management
* Application status updates
* Database operations
* Protected routes

---

## ☁️ Cloud Services

### Cloudinary

Cloudinary is used for storing user-uploaded files such as:

* Profile pictures
* Resumes/CVs

This allows the application to store and retrieve uploaded files through secure cloud URLs.

---

# 🔐 Authentication & Authorization

NexHire uses **JWT-based authentication** to protect private routes.

Users are authenticated through cookies and protected backend routes use authentication middleware.

The platform also separates users according to their role:

```text
Student
   ↓
Job Seeker Features

Recruiter
   ↓
Recruiter / Admin Features
```

Recruiters can access:

* Dashboard
* Jobs
* Companies
* Applicants

Students can access:

* Home
* Jobs
* Companies
* About
* Profile
* Applied Jobs

---

# 📊 Applicant Management

One of the main features of NexHire is the applicant management system.

When a student applies for a job:

```text
Student
   ↓
Application Created
   ↓
Application Linked With Job
   ↓
Recruiter Sees Applicant
```

Recruiters can then:

* See applicant name
* See applicant email
* See location
* See profile picture
* View resume
* Download resume
* Accept applicant
* Reject applicant

Application status can be:

```text
pending
accepted
rejected
```

---

# 📄 Resume Management

Users can upload their CV from their profile.

The resume is stored using Cloudinary and the application keeps:

* Resume URL
* Original resume filename

Recruiters can then:

### 👁️ View

Open the resume in a browser.

### ⬇️ Download

Download the applicant's resume using the original filename.

---

# 🔎 Job Search & Filtering

NexHire provides multiple ways to find relevant jobs.

Users can filter jobs based on:

### 📍 Location

Examples:

* Lahore
* Karachi
* Islamabad
* Gujranwala
* Multan

### 💼 Job Role

Examples:

* Frontend Developer
* Backend Developer
* MERN Stack Developer
* AI Developer
* Software Developer

### 💰 Salary

Salary ranges can also be selected to find jobs according to the user's expectations.

### 🔍 Search

Users can search jobs by:

* Job title
* Job description

---

# 🏢 Company Management

Recruiters can create and manage companies with information such as:

* Company name
* Description
* Website
* Location
* Company logo

Recruiters can then associate jobs with their companies.

---

# 💼 Job Management

Recruiters can create jobs containing information such as:

* Job title
* Job description
* Requirements
* Salary
* Location
* Job type
* Number of positions
* Company
* Creator

Each job can have multiple applications associated with it.

---

# 🗃️ Database Structure

NexHire uses **MongoDB with Mongoose**.

Main models include:

```text
User
 │
 ├── Profile
 │    ├── Profile Photo
 │    ├── Resume
 │    ├── Skills
 │    └── Bio
 │
 ├── Company
 │
 └── Job
       │
       └── Applications
              │
              └── Applicant
```

The application uses MongoDB references and Mongoose `populate()` to retrieve related information such as:

* Company information
* Job information
* Applicant information
* Applications

---

# 📡 REST API Structure

The backend follows a REST API structure.

### User

```text
/api/v1/user
```

Handles:

* Registration
* Login
* Logout
* Profile operations

### Company

```text
/api/v1/company
```

Handles:

* Company creation
* Company retrieval
* Company management

### Jobs

```text
/api/v1/job
```

Handles:

* Job creation
* Job retrieval
* Job updates
* Job filtering/data retrieval

### Applications

```text
/api/v1/applicants
```

Handles:

```text
POST   /apply/:id
GET    /get/apply/:jobId
GET    /get/applicants/:id
PUT    /update/:id
```

These APIs handle the complete job application workflow.

---

# 🎨 UI & Design

The interface is designed with a clean modern style using:

* White backgrounds
* Black typography
* Blue accents
* Subtle gradients
* Rounded cards
* Responsive layouts
* Hover effects
* Smooth transitions
* AOS animations
* Shadcn/UI components
* Lucide icons

The application is designed to work across:

```text
📱 Mobile
📱 Tablet
💻 Desktop
🖥️ Large Screens
```

---

# 📱 Responsive Design

NexHire has responsive layouts throughout the application.

The navigation system changes according to screen size.

### Desktop

Recruiters get:

```text
Dashboard | Jobs | Companies
```

Students get:

```text
Home | Jobs | Companies | About Us
```

### Mobile

A responsive mobile menu is provided using a Sheet component.

The menu automatically closes when a navigation item is selected.

---

# 🔔 User Experience

The application uses **Sonner toast notifications** to provide feedback for actions such as:

* Successful login
* Registration
* Job application
* Errors
* API failures
* Other user actions

AOS animations are also used to make different UI sections appear smoothly while scrolling.

---

# 📂 Project Structure

A simplified structure of the project:

```text
NexHire/
│
├── FrontEnd/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── hooks/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── BackEnd/
│   │
│   ├── controllers/
│   ├── model/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

## 2. Frontend

```bash
cd FrontEnd
npm install
npm run dev
```

## 3. Backend

Open another terminal:

```bash
cd BackEnd
npm install
npm run dev
```

Or start the backend using:

```bash
node app.js
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend project.

Add your own credentials for:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Never upload real secrets, passwords, API keys or database credentials to GitHub.

---

# 🚀 Future Improvements

NexHire can be further improved with features such as:

* 💬 Recruiter and applicant messaging
* 📧 Email notifications
* 🔔 Real-time application notifications
* ⭐ Company reviews and ratings
* ❤️ Save/bookmark jobs
* 📈 Advanced recruiter analytics
* 🤖 AI-powered job recommendations
* 🤖 AI resume analysis
* 🧠 Skill-based job matching
* 🌙 Dark mode
* 🔎 Advanced job search
* 📊 More detailed recruiter dashboard

---

# 🎯 Project Goals

The main goal of NexHire was to build a complete recruitment platform while gaining practical experience with:

* Full-stack development
* REST API development
* Authentication
* Authorization
* MongoDB relationships
* React state management
* File uploads
* Cloudinary
* Responsive UI
* CRUD operations
* Git and GitHub
* Real-world application architecture

---

# 🧠 What I Learned

While building NexHire, I worked with real-world development concepts including:

* Building a full-stack MERN application
* Connecting React with Express APIs
* Managing global state with Redux
* Implementing JWT authentication
* Protecting routes with middleware
* Working with MongoDB and Mongoose
* Using `populate()` for related documents
* Handling file uploads with Cloudinary
* Managing job applications
* Building role-based interfaces
* Creating responsive layouts
* Debugging frontend and backend errors
* Working with Git and GitHub
* Structuring a scalable project

---

# 👨‍💻 Developer

### Malik Asim Ali

BSCS Student & Full-Stack Developer

Interested in:

* MERN Stack
* React.js
* Node.js
* Backend Development
* AI & Modern Web Technologies

---

# ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

Your feedback and suggestions are always welcome.

---

<div align="center">

### 🚀 NexHire

**Connecting Talent With Opportunity.**

Built with ❤️ using the MERN Stack.

</div>
