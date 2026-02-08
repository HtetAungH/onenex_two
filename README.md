# OneNex Task - Modern React Website

A premium, interactive web application built with **React 19**, **Material UI**, and **Framer Motion**. This project showcases a modern design with dynamic sections, smooth animations, and a centralized theme system.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## ✨ Features

- **🚀 High Performance**: Built with Vite for lightning-fast development and optimized production builds.
- **🎨 Premium Design**: Modern aesthetics using a custom Material UI theme with curated color palettes and gradients.
- **🎭 Dynamic Animations**: Staggered text reveals, hover effects, and smooth scroll transitions powered by Framer Motion.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **📂 Component-Driven**: Modular architecture with reusable components in `src/components`.
- **📩 Interactive Contact Form**: Styled input fields with real-time feedback and validation states.
- **🛠️ Centralized Theme**: Easily customizable theme in `theme.js` for consistent branding throughout the app.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **UI Library**: [Material UI (v7)](https://mui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Emotion (MUI) & Vanilla CSS
- **Linting**: ESLint with React-specific configurations

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd onenex_task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
onenex_task/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, and fonts
│   ├── components/      # UI Components (Navbar, Footer, etc.)
│   │   ├── Cases/       # Case studies section
│   │   ├── Services/    # Service offerings section
│   │   └── ContactPage  # Contact form component
│   ├── App.jsx          # Main application core
│   ├── main.jsx         # Entry point
│   ├── theme.js         # MUI Theme configuration
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## 🎨 Design System

The project uses a centralized theme system located in `src/theme.js`. It defines:

- **Primary Colors**: Purple (`#5B21B6`) for core branding.
- **Secondary Colors**: Cyan (`#00D9FF`) for accents and highlights.
- **Backgrounds**: Custom gradients including `lavender` and `services`.
- **Typography**: Optimized font hierarchy for readability and visual appeal.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
