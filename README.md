# 🚀 NexHire — Modern Job Finding & Recruitment Platform

NexHire is a full-stack **MERN job recruitment platform** designed to connect job seekers with recruiters and companies.

The platform provides a complete hiring workflow where students/job seekers can discover jobs, apply for positions, upload their profile and resume, while recruiters can create jobs, manage companies, view applicants, review resumes, and accept or reject applications.

---

## 🌐 Project Overview

NexHire provides two main experiences:

### 👨‍💻 Job Seeker / Student

Users can:

* Create an account
* Login securely
* Browse available jobs
* Search and filter jobs
* View complete job details
* Apply for jobs
* Upload profile picture
* Upload resume/CV
* Add skills and professional information
* View their profile
* Track applied jobs
* Check application status
* See whether an application is pending, accepted, or rejected

### 🧑‍💼 Recruiter

Recruiters can:

* Register and login
* Access a dedicated admin dashboard
* Create companies
* Manage companies
* Create job postings
* Manage posted jobs
* View applicants for a specific job
* View applicant information
* View applicant resumes
* Download applicant resumes
* Accept applications
* Reject applications
* Track applicant status

---

# ✨ Features

## 🔐 Authentication

* User registration
* User login
* User logout
* JWT-based authentication
* HTTP-only cookie authentication
* Protected routes
* Role-based access
* Student and recruiter roles

---

## 👤 User Profile

Job seekers can maintain a professional profile containing:

* Full name
* Email
* Phone number
* City
* Country
* Bio
* Skills
* Profile picture
* Resume/CV
* Original resume filename

Profile images and resumes are stored using **Cloudinary**.

---

## 💼 Job Management

Recruiters can create and manage jobs with information such as:

* Job title
* Description
* Requirements
* Salary
* Location
* Job type
* Number of available positions
* Company
* Job creator

---

## 🔎 Job Search & Filtering

Users can search and filter jobs using:

* Search keyword
* Location
* Job role
* Salary range

The job listing interface dynamically updates according to selected filters.

---

## 📄 Job Applications

Students can apply to jobs.

The system prevents the same user from applying to the same job multiple times.

Each application contains:

* Applicant
* Job
* Application status
* Created date
* Updated date

Application status can be:

`pending`

`accepted`

`rejected`

---

# 🧑‍💼 Applicant Management

Recruiters can open a job and see all applicants who applied for it.

Applicant information includes:

* Profile picture
* Full name
* Email
* City
* Country
* Resume
* Application status

Recruiters can:

### 👁️ View Resume

Open the applicant's CV in the browser.

### ⬇️ Download Resume

Download the applicant's uploaded CV.

### ✅ Accept Applicant

Change the application status to:

`accepted`

### ❌ Reject Applicant

Change the application status to:

`rejected`

The updated status is also reflected in the student's applied-jobs section.

---

# 🏢 Company Management

Recruiters can create and manage companies.

Company information includes:

* Company name
* Description
* Website
* Location
* Company logo
* Recruiter/user reference

---

# 📊 Recruiter Dashboard

Recruiters have a dedicated admin interface containing:

* Dashboard
* Jobs
* Companies
* Applicants

The recruiter navigation is separated from the normal student navigation.

---

# 🎨 Frontend

The frontend is built with:

* React.js
* Vite
* Tailwind CSS
* Shadcn/UI
* Lucide React
* Redux Toolkit
* React Router
* Axios
* AOS

The interface is designed to be:

* Responsive
* Modern
* Clean
* User-friendly
* Mobile-friendly

The navigation also includes a responsive mobile menu for smaller screens.

---

# ⚙️ Backend

The backend is built using:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Cloudinary
* Multer

The backend follows a controller and route based architecture.

---

# 🗄️ Database

NexHire uses **MongoDB** as its database.

Mongoose is used for database modeling and communication.

Main models include:

### User

Stores:

* Name
* Email
* Password
* Role
* Phone
* Location
* Profile information

### Company

Stores:

* Company details
* Logo
* Website
* Location
* Recruiter reference

### Job

Stores:

* Title
* Description
* Requirements
* Salary
* Location
* Job type
* Position
* Company reference
* Created by
* Applications

### Application

Stores:

* Job reference
* Applicant reference
* Status
* Timestamps

---

# ☁️ Cloudinary

Cloudinary is used for storing user-uploaded files.

### Profile Images

Profile images are uploaded and stored through Cloudinary.

### Resumes

PDF resumes/CVs are also uploaded to Cloudinary.

The application stores the Cloudinary URL in the user's profile and uses that URL for viewing and downloading resumes.

---

# 🔗 API Structure

Main API routes include:

## Authentication

```text
/api/v1/user/register
/api/v1/user/login
/api/v1/user/logout
```

## Jobs

```text
/api/v1/job/create
/api/v1/job/get/:id
/api/v1/job/getAllJobs
/api/v1/job/update/:id
```

## Companies

```text
/api/v1/company
```

## Applications

```text
POST /api/v1/applicants/apply/:id

GET /api/v1/applicants/get/apply/:jobId

GET /api/v1/applicants/get/applicants/:id

PUT /api/v1/applicants/update/:id
```

---

# 🔐 Role-Based Navigation

NexHire provides different navigation according to the user's role.

### Student

```text
Home
Jobs
Companies
About Us
Profile
```

### Recruiter

```text
Dashboard
Jobs
Companies
```

This keeps the recruiter/admin functionality separate from the job-seeker experience.

---

# 📱 Responsive Design

NexHire is responsive across:

* Desktop
* Laptop
* Tablet
* Mobile

The navbar automatically switches to a mobile menu on smaller screens.

The recruiter and student navigation logic is also maintained inside the responsive mobile menu.

---

# 🧩 UI Components

The project uses reusable UI components including:

* Navbar
* Mobile Menu
* Avatar
* Popover
* Dialog
* Sheet
* Table
* Badge
* Buttons
* Forms
* Cards
* Job listings
* Applicant table
* Profile components

This makes the frontend easier to maintain and extend.

---

# 🛠️ Technologies Used

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| React.js      | Frontend                |
| Vite          | Development environment |
| Tailwind CSS  | Styling                 |
| Shadcn/UI     | UI components           |
| Lucide React  | Icons                   |
| Redux Toolkit | Global state management |
| React Router  | Routing                 |
| Axios         | API requests            |
| Node.js       | Backend runtime         |
| Express.js    | Backend framework       |
| MongoDB       | Database                |
| Mongoose      | MongoDB ODM             |
| JWT           | Authentication          |
| bcrypt        | Password hashing        |
| Cloudinary    | Image & resume storage  |
| Multer        | File uploads            |
| AOS           | Animations              |

---

# 📁 Project Structure

```text
NexHire
│
├── FrontEnd
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── hooks
│   │   ├── assets
│   │   └── App.jsx
│   │
│   └── package.json
│
├── BackEnd
│   ├── controllers
│   ├── model
│   ├── routes
│   ├── middlewares
│   ├── utils
│   ├── uploads
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the frontend:

```bash
cd FrontEnd
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Open another terminal and go to the backend:

```bash
cd BackEnd
```

Install backend dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the backend and add your required environment variables.

Example:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Never upload your actual `.env` file or secret credentials to GitHub.

---

# 🔄 Application Flow

```text
User Registration
       ↓
User Login
       ↓
Role Detection
       ↓
 ┌───────────────┐
 │               │
Student       Recruiter
 │               │
 ↓               ↓
Browse Jobs   Dashboard
 │               │
 ↓               ↓
Apply Job     Create Company
 │               │
 ↓               ↓
Track Status  Create Job
                 │
                 ↓
             View Applicants
                 │
          ┌──────┴──────┐
          ↓             ↓
       Accept        Reject
          │             │
          └──────┬──────┘
                 ↓
          Application Status
                 ↓
          Student Profile
```

---

# 🎯 Future Improvements

Possible future improvements include:

* Email notifications
* Recruiter notifications
* Advanced job recommendations
* Admin analytics
* Pagination
* Saved jobs
* Application history
* Recruiter verification
* Company reviews
* Real-time notifications
* Chat between recruiters and applicants
* AI-powered job recommendations
* AI resume analysis

---

# 👨‍💻 Developer

**Malik Asim Ali**

BS Computer Science Student

Interested in:

* MERN Stack Development
* React.js
* Node.js
* MongoDB
* Full-Stack Development
* AI & Software Development

---

# ⭐ Project Goal

The goal of NexHire is to build a complete real-world recruitment platform while practicing modern full-stack development concepts including:

**Frontend Development → REST APIs → Authentication → Database Management → File Uploads → Cloud Storage → Role-Based Access → State Management → Responsive UI**

---

# ❤️ Acknowledgement

NexHire was built as a full-stack learning and portfolio project with the goal of gaining practical experience in modern web development and building a real-world application from frontend to backend.

If you find the project interesting, consider giving the repository a ⭐.
