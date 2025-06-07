# 📝 Canary Mail – Todo Web App Documentation

## 📌 Overview

This is a full-stack Todo web application built as part of the Canary Mail assignment. It allows users to create, read, update, and delete (CRUD) todos.

---

## 🚀 Tech Stack

### 🖥️ Frontend:

- **React.js** with **TypeScript**
- **Tailwind CSS** for styling
- **ShadCN UI** (Radix UI + Tailwind + Component Library)
- **Vite** for fast dev experience

### ⚙️ Backend:

- **Python** (FastAPI)
- **SQLite** as the database
- **CORS enabled** for frontend-backend integration

---

## 🚀 Features

✅ Add new todos

✅ View list of todos

✅ Edit todos (title & completion status)

✅ Delete todos

✅ Realtime updates on CRUD actions without page reload

---

## 🧱 Project Structure

```
canary-todo-app/
│
├── backend/
│   ├── main.py              # FastAPI app entry point
│   ├── schema.py            # Pydantic models for request/response
│   ├── database.py          # SQLite DB setup & helper functions
│
├── frontend/
│   ├── components/          # UI components (AddTodo, EditTodo, TodoCard, etc.)
│   ├── App.tsx              # Main React component
│   ├── types.ts             # TypeScript type definitions
│   ├── main.tsx             # Vite entry point
│
└── README.md                # This documentation

```

---

## 💻 Setup Instructions

### ✅ 1. Clone the repo

```bash
git clone https://github.com/Harsh6575/canary-todo-app.git
cd canary-todo-app
```

### ✅ 2. Run the Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

By default, it runs on `http://localhost:8000`

### ✅ 3. Run the Frontend (Vite + React)

```bash
cd frontend
npm install
npm run dev
```

By default, it runs on `http://localhost:5173`

> For better experience, you can use Reame files for Frontend and Backend.

---

## 🛠️ Technologies Used

Frontend:

- React (with Vite)

- TypeScript

- Tailwind CSS

- Shadcn UI (Radix-based UI components)

- REST API (Fetch)

Backend:

- Python

- FastAPI

- SQLite

- Pydantic (data validation)

---

## 🔁 API Endpoints

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| GET    | /todos      | Get all todos           |
| POST   | /todos      | Create a new todo       |
| PUT    | /todos/{id} | Update an existing todo |
| DELETE | /todos/{id} | Delete a todo           |

---

## 📷 Screenshots

### Examples

#### Empty state message

![Empty state message](/data/1.png)

#### Add todo dialog

![Add Todo](/data/2.png)

#### Todo list with edit/delete

![Dashboard](/data/3.png)

#### Edit Todo

![Edit Todo](/data/4.png)

#### Edited Todo

![Edited Todo](/data/5.png)

#### Delete Todo

![Delete Todo](/data/6.png)

---

📄 Notes
Form state is cleared after submission.

Changes reflect immediately due to use of callbacks like onAdd, onEdit, onDelete.

All API requests use fetch with JSON content.

---

## 📬 Author

Harsh Vansjaliya
[Portfolio](https://harsh-vansjaliya.vercel.app) • [LinkedIn](https://www.linkedin.com/in/harsh-vansjaliya-904825226/)
