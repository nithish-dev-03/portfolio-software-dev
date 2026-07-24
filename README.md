<div align="center">
  
# 👨‍💻 Nirmal Sing Nithish N - Software Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
</p>

A modern, high-performance, full-stack portfolio website built to showcase my projects, skills, and open-source contributions. 

</div>

---

## ✨ Features

- **Full-Stack Architecture**: Decoupled React frontend and Node.js/Express backend for secure API communication.
- **Dynamic GitHub Integration**: Live fetching of public and private repository statistics, contribution heatmaps, and top programming languages using a secure backend proxy to the GitHub REST API.
- **Modern Tech Stack**: React, TypeScript, and Vite for lightning-fast HMR and optimized production builds.
- **Responsive UI/UX**: Premium glassmorphism aesthetics, fluid typography, and custom webkit scrollbars tailored for both desktop and mobile devices.
- **Theming**: Integrated seamless Light and Dark modes.
- **Internationalization (i18n)**: Multi-language support structure using `react-i18next`.
- **Enhanced Security**: API credentials and secrets are kept securely in the backend, utilizing Helmet, rate limiting, and centralized error handling.

## 🏗️ Architecture

This project is structured as a monorepo containing two main parts:
- `/frontend` - A React application built with Vite and Tailwind CSS.
- `/backend` - An Express Node.js application to proxy GitHub API requests securely.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nithish-dev-03/portfolio-software-dev.git
   cd portfolio-software-dev
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add your GitHub Personal Access Token (PAT):
   ```env
   GITHUB_TOKEN=github_pat_YOUR_TOKEN_HERE
   PORT=5000
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory for the backend URL (if necessary):
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Production Build:**
   To build both sides for production:
   - For backend: `npm run build` in the `/backend` directory.
   - For frontend: `npm run build` in the `/frontend` directory.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack Query & Axios
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Backend
- **Framework**: Node.js & Express.js
- **Language**: TypeScript
- **Security**: Helmet, express-rate-limit, cors
- **Caching**: node-cache

## 📬 Contact

- **Email**: nirmalnithishdeveloper@gmail.com
- **LinkedIn**: [Nirmal Sing Nithish N](https://linkedin.com/in/nirmal-sing-nithish-n)
- **Location**: Tamil Nadu, India

---
<div align="center">
  <b>Designed & Developed by Nirmal Sing Nithish N</b>
</div>
