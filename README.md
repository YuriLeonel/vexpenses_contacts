# 👋 Welcome to Vexpenses Contacts!

A modern, minimal contact management app built with **React**, **TypeScript**, and **Vite**. This project is designed for a tech interview and showcases clean code, SOLID, Design Patterns, best practices, and a simple yet effective UI.

---

## 🚀 Quick Start

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone <https://github.com/YuriLeonel/vexpenses_contacts.git>
cd vexpenses_contacts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the mock backend (JSON Server)

```bash
npm run server
```

- The mock API will be available at [http://localhost:3001/contacts](http://localhost:3001/contacts)

### 4. Start the frontend

```bash
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal)

---

## 📝 About the Project

- **Purpose:** A reliable and intuitive contact list app, inspired by the default Contacts experience on Android and Apple devices. It supports essential features such as viewing, adding, editing, and deleting contacts, with a focus on usability, accessibility, and consistency.
- **Tech Stack:**

  - React 19 + TypeScript
  - Vite (blazing fast dev/build)
  - Styled-components (theming & global styles)
  - React Hook Form & Yup (form handling & validation)
  - React Toastify (notifications)
  - JSON Server (mock REST API)

- **Design:**
  - Clean, modern UI with a custom theme (see `src/styles/Theme.ts`)
  - Responsive and accessible

---

## 📁 Project Structure

- `src/` – Main source code
  - `App.tsx` – Main app component
  - `features/contacts/` – Contact management logic
  - `styles/` – Global styles and theme
- `db.json` – Mock data for JSON Server

---

## 🧪 Demo Data

The app comes with sample contacts (see `db.json`). You can add, edit, or remove contacts via the UI. All changes are reflected in the mock API.

---

## 🤝 For Interviewers

- This project demonstrates modern React patterns, clean code, and attention to UI/UX.
- Please feel free to explore, test, and review the codebase!

---

## 📣 Feedback

Suggestions or questions? Feel free to reach out!
