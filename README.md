# AniWiki Frontend

This is the **frontend** part of the AniWiki project, built using **React.js**.  
It features **page routing**, **beautiful UI design** with **Ant Design** and **Tailwind CSS**, and **fetches data** from a **backend Web API** using **JSON** format to render anime information dynamically.

---

## ✨ Tech Stack

- **React.js** — Frontend framework
- **Ant Design (antd)** — UI components library
- **Tailwind CSS** — Utility-first CSS framework for styling
- **React Router DOM** — For page routing
- **Axios** — For HTTP requests
- **Web API** — Backend (fetches data via HTTP in JSON format)

---

## 🚀 Features

- Fully responsive pages
- Anime list rendering from backend
- Detailed anime pages with blur effects and styled layouts
- Pagination with navigation buttons
- Smooth page transitions with React Router
- Ant Design components combined with Tailwind utility classes
- Clean and modern UI

---

## 🔥 Project Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://your-repository-link.git
   cd your-project-folder
2. **Install dependencies:**
```bash
npm install
```
3.Install additional required libraries:
   ```bash
  npm install antd --save
  npm install less
  npm install -D tailwindcss postcss autoprefixer
  npm install react-router-dom
  npm install axios
```
4. Start the development server:
```bash
npm run dev
```
##📡 Backend Connection

The frontend communicates with a Web API backend by sending HTTP requests and receiving JSON responses.Fetched data includes anime information such as title, synopsis, image, rating, and genres.
