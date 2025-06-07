# 🛠️ Backend - Canary Mail Todo API

## Overview

This is the backend API for the Canary Mail Todo app. It is built using **FastAPI** and uses **SQLite** as the database.

---

## 🐍 Python Version

- Python 3.10+

## ⚙️ Setup Instructions

### 1. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
```

### 2. Install dependencies

```bash
pip install fastapi uvicorn
```

Alternatively, if `requirements.txt` exists:

```bash
pip install -r requirements.txt
```

### 4. Run the API server

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

---

## API Endpoints

| Method | Endpoint     | Description             |
|--------|--------------|-------------------------|
| GET    | `/todos`     | Get all todos           |
| POST   | `/todos`     | Create a new todo       |
| PUT    | `/todos/{id}`| Update a todo by ID     |
| DELETE | `/todos/{id}`| Delete a todo by ID     |

---

## Notes

- Uses SQLite for data persistence (`database.py` handles DB setup)
- CORS is enabled for frontend integration
- Data validation handled via Pydantic schemas (`schema.py`)

---

## Author

Harsh Vansjaliya  
[Portfolio](https://harsh-vansjaliya.vercel.app) • [LinkedIn](https://linkedin.com/in/harsh-vansjaliya-904825226)
