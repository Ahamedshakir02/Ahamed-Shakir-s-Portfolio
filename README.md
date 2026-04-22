# Ahamed Shakir Portfolio

A high-performance, dynamic portfolio website built with React, TypeScript, and Firebase. This project features a clean, professional aesthetic with an optional "Vibe Mode" for a bold, interactive experience.

## 🚀 Key Features

- **Dynamic Content**: Managed via Firebase Firestore (Projects, Experience, Blog).
- **Admin Dashboard**: Secure `/admin` area to add, edit, or delete content.
- **Vibe Mode**: A high-energy, dark-themed toggle with glitch effects and neon accents.
- **Fluid Animations**: Powered by Framer Motion for tactical button feedback and smooth transitions.
- **Intelligent Cursor**: A custom inverted cursor that shifts color based on the background.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop using Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database/Auth**: [Firebase](https://firebase.google.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Setup Environment**:
   Ensure your Firebase configuration is present in `firebase-applet-config.json` at the root of the project.

3. **Run for Development**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 How to Add Content

### Using the Admin Dashboard

1. Navigate to `/admin` in your browser.
2. Sign in with your authorized Google account (`ahamedshakir02@gmail.com`).
3. Use the tabs to manage:
   - **Projects**: Add your latest work with descriptions, links, and technologies.
   - **Blog**: Write Markdown-based posts.
   - **Experience**: Update your career path and milestones.

### Manual Customization

- **Branding**: Update your name or logos in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
- **Themes & Colors**: Edit `src/index.css` to tweak primary colors or the "Vibe Mode" aesthetic.
- **Hero Image**: Update your profile photo settings in `src/components/Hero.tsx`.

## 📂 Project Structure

- `src/components/`: Reusable UI components (Hero, Projects, Contact, etc.).
- `src/services/`: Data fetching logic and Firebase integration.
- `src/contexts/`: Global state management (e.g., Vibe Mode).
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions and Firebase initialization.

## 📄 License

This project is licensed under the Apache-2.0 License.
