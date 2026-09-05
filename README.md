# CodeSprint1

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19.1.0-blue.svg)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-v5.1.0-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen.svg)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**CodeSprint1** is a full-stack, feature-rich online coding platform designed to help programmers enhance their problem-solving and algorithmic skills—much like LeetCode.
It combines an intuitive code editing interface with real-time feedback, AI assistance, automated submissions, and robust performance management.

---

## 🚀 Key Features

- **In-Browser Code Editor:** Integrated with Monaco Editor (`@monaco-editor/react`) for seamless syntax highlighting, multi-language support, and keybindings.
- **AI-Powered Code Assistance:** Leveraging `@google/genai` to deliver intelligent code analysis, hint generation, and solution breakdowns.
- **Secure Authentication & Authorization:** Session security via JWT (`jsonwebtoken`), HTTP-only cookies (`cookie-parser`), and password hashing with `bcrypt`.
- **Fast Data Caching:** Utilizes **Redis** for efficient caching, fast response times, and optimized query handling.
- **Problem & Submission Management:** Comprehensive MongoDB database design via Mongoose for user profiles, submission histories, test cases, and problem archives.
- **Media Storage:** Integrated with Cloudinary for seamless media upload and asset management.
- **Modern UI & Responsive Design:** Built with React 19, Tailwind CSS v4, DaisyUI v5, and Lucide React icons for a sleek visual experience.
- **State & Form Management:** Global application state powered by **Redux Toolkit** (`authSlice.js`, store) and schema-driven form validation with **React Hook Form** + **Zod**.

---

## 🛠️ Tech Stack

### **Backend**
| Technology | Purpose |
| :--- | :--- |
| **Node.js & Express v5** | Server framework for API routing and request handling |
| **MongoDB & Mongoose** | NoSQL database and Object Data Modeling (ODM) |
| **Redis** | In-memory data store for caching and state storage |
| **@google/genai** | Gemini AI integration for smart code assistance |
| **JWT & Bcrypt** | Secure authentication token generation and password hashing |
| **Cloudinary** | Cloud file and image storage management |
| **Axios, Dotenv, Cors, Cookie-Parser** | HTTP client, environment handling, CORS, and cookie management |

### **Frontend**
| Technology | Purpose |
| :--- | :--- |
| **React 19 & React Router** | Frontend component framework and client-side routing |
| **Monaco Editor** | Code editing component (same editor powering VS Code) |
| **Redux Toolkit** | Global state management |
| **Tailwind CSS v4 & DaisyUI v5** | Utility-first styling framework and UI components |
| **React Hook Form & Zod** | Declarative forms with strict schema validation |
| **Lucide React** | Modern icon set |

---

## 📂 Project Architecture

```text
codeSprint1/
│
├── frontend/                     # React / Vite Client Application
│   ├── public/                   # Static public assets
│   ├── src/
│   │   ├── assets/               # Image & media assets
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Application page views
│   │   ├── store/                # Redux store configuration
│   │   ├── utils/                # Frontend utilities & helpers
│   │   ├── App.css / App.jsx     # Main React App layout & styling
│   │   ├── authSlice.js          # Authentication state management
│   │   └── main.jsx / index.css  # Application entry point & global styles
│   ├── eslint.config.js          # ESLint configuration
│   ├── index.html                # HTML entry point
│   ├── package.json              # Frontend dependencies
│   └── vite.config.js            # Vite build configuration
│
└── backend/                      # Express / Node.js Server Application
    └── src/
        ├── config/               # Database & service connections
        ├── controllers/          # API endpoint logic handlers
        ├── middleware/           # Auth & request validation middleware
        ├── models/               # Mongoose database schemas
        ├── routes/               # Express API endpoint routes
        ├── utils/                # Backend helper functions
        ├── index.js              # Express server entry point
        ├── package.json          # Backend dependencies
        └── .env                  # Environment configurations (Do NOT commit to Git)
🔒 Safety & Security Note
Important: Never commit sensitive credentials to GitHub.

Ensure your .gitignore file in the root or backend folder includes:
.env
node_modules/
.DS_Store
dist/
build/
⚙️ Prerequisites & Environment Setup
Make sure you have the following installed locally:

Node.js (v18.x or higher)

MongoDB (Local or MongoDB Atlas instance)

Redis Server

Environment Variables Configuration
Create a .env file in your backend/ folder:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27022/codesprint1
REDIS_URL=redis://127.0.0.1:6666
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_genai_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
Getting Started
1. Clone the Repository
git clone [https://github.com/your-username/codeSprint1.git](https://github.com/your-username/codeSprint1.git)
cd codeSprint1
2. Backend Setup
cd backend
npm install
npm start
3. Frontend Setup
Open a new terminal window:

Bash
cd frontend
npm install
npm run dev
Navigate to http://localhost:5173 in your browser.

🎯 Usage
Sign Up / Log In: Register an account to track your solved problems and submission history.

Explore Problems: Browse through problem statements categorized by difficulty and tags.

Write & Test Code: Use the built-in Monaco editor to formulate your solution.

Submit & Review: Run test cases, receive real-time execution results, and leverage AI hints whenever stuck.
