# 👨‍💻 Nirmal Sing Nithish N - Software Developer Portfolio

A modern, high-performance portfolio website built to showcase my projects, skills, and open-source contributions. 

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring a sleek glassmorphism UI, light/dark mode support, and live GitHub integration.

## ✨ Features

- **Dynamic GitHub Integration**: Live fetching of public and private repository statistics, contribution heatmaps, and top programming languages using the GitHub REST API.
- **Modern Tech Stack**: React, TypeScript, and Vite for lightning-fast HMR and optimized production builds.
- **Responsive UI/UX**: Premium glassmorphism aesthetics, fluid typography, and custom webkit scrollbars tailored for both desktop and mobile devices.
- **Theming**: Integrated seamless Light and Dark modes.
- **Internationalization (i18n)**: Multi-language support structure using `react-i18next`.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nithish-dev-03/portfolio-software-dev.git
   cd portfolio-software-dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional but recommended):**
   To display your private GitHub repositories and bypass strict API rate limits, create a `.env` file in the root directory and add a GitHub Personal Access Token (PAT):
   ```env
   VITE_GITHUB_TOKEN=github_pat_YOUR_TOKEN_HERE
   ```
   *(Note: Ensure your token has `repo` read permissions. If omitted, the app will gracefully default to fetching only public repositories).*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack
- **Frontend Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📬 Contact
- **Email**: nirmalnithishdeveloper@gmail.com
- **LinkedIn**: [Nirmal Sing Nithish N](https://linkedin.com/in/nirmal-sing-nithish-n)
- **Location**: Tamil Nadu, India

---
*Designed & Developed by Nirmal Sing Nithish N*
