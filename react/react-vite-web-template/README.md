# React + Vite + TypeScript + Tailwind

This template provides a minimal yet scalable setup to get **React** running with **Vite**, enhanced by **TypeScript** and **Tailwind CSS**.

## ✅ Benefits of This Structure

- **Enterprise standards** → Aligns with best practices for large React projects.
- **Separation of concerns** → Each domain (UI, state, API, routing) has its own folder.
- **Developer Experience** → Fast builds with Vite, type safety with TypeScript, and utility-first styling with Tailwind.  
- **Scalability** → Easy to add new features without clutter.
- **Quality Assurance** → ESLint + Stylelint catch issues early, Prettier enforces clean code style.  

## 🚀 Enterprise-Ready Stack

For building enterprise large-scale React applications, the following combination is robust, modern, and widely adopted:

| Category   | Technology                         |
| ---------- | ---------------------------------- |
| Framework  | React 19                           |
| Build Tool | Vite                               |
| UI         | Tailwind CSS                       |
| Language   | TypeScript                         |
| Routing    | React Router                       |
| State      | Redux Toolkit                      |
| API        | Redux Toolkit Query *(in progress)*|
| Forms      | React Hook Form *(in progress)*    |
| Linting    | ESLint                             |
| CSS        | Stylelint                          |
| Formatting | Prettier                           |

---

## 📦 Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 📂 Recommended Folder Structure
```bash
src/
├── assets/          # Static assets (images, fonts, icons)
├── components/      # Reusable UI components
├── feautres/        # Feauture level components
├── layouts/         # Shared layouts (headers, sidebars, footers)
├── hooks/           # Custom React hooks
├── services/        # API calls, RTK Query endpoints
├── styles/          # Global styles, Tailwind config overrides
├── utils/           # Helper functions and utilities
├── router/          # Centralized React Router configuration
├── app              # Root application component
└── main.tsx         # Entry point (renders App into DOM)
```