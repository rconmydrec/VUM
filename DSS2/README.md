# Todo Project  
ASP.NET Core 6 • EF Core 6 • Refit • SQLite

A compact, layered **“To-do manager”** that demonstrates clean architecture with ASP.NET Core:

* **Domain → Application → Infrastructure → Web API → MVC client**  
* Cookie-based authentication with simple roles  
* SQLite persistence & EF Core migrations  
* Swagger/OpenAPI docs out-of-the-box

---

## Table of Contents
1. [Project structure](#project-structure)  
2. [Quick start](#quick-start)  
3. [Running migrations](#running-migrations)  
4. [Environment variables](#environment-variables)  
5. [Admin accounts](#admin-accounts)  
6. [API surface](#api-surface)  
7. [Screenshots](#screenshots)

---

## Project structure <a name="project-structure"></a>

```text
├─ Todo.Domain          ← entities & repository/service interfaces
├─ Todo.Application     ← business logic (implements services)
├─ Todo.Infrastructure  ← EF Core, repositories, mappings
├─ Todo.Web.Api         ← pure Web API, Swagger enabled
└─ Todo.Web             ← MVC + Razor views + Refit HTTP clients
```
Data flow:
```text
Controller → Application-Service → Repository → Database
      ↑                                  │
      └──────── Refit (MVC) ─────────────┘
```

---

## Quick start <a name="quick-start"></a>
```bash
# apply migrations (creates SQLite file at Data/Todo.db)
dotnet ef database update --project Todo.Infrastructure

# run Web API (port 5001)
dotnet run --project Todo.Web.Api

# run MVC client (port 5000) – needs API running
dotnet run --project Todo.Web
```
* MVC UI → http://localhost:5000  
* Swagger → http://localhost:5001/swagger

---

## Running migrations <a name="running-migrations"></a>
```bash
# create new migration
dotnet ef migrations add AddPriorityToTasks         --project Todo.Infrastructure
# update DB schema
dotnet ef database update --project Todo.Infrastructure
```
Requires the EF CLI (`dotnet tool install --global dotnet-ef`).

---

## Environment variables <a name="environment-variables"></a>

| Variable | Default | Purpose |
|----------|---------|---------|
| `WEB_API_URL` | `https://localhost:5001/` | Base URL for Refit clients inside MVC |
| `ConnectionStrings__DefaultConnection` | `Data Source=../Data/Todo.db` | Override DB location or switch provider |

---

## Admin accounts <a name="admin-accounts"></a>
**Swagger method**  
`POST /api/user` body:
```json
{ "name": "admin", "password": "admin123", "isAdmin": true }
```
Login with that user – the *Users* menu appears.

**Manual toggle**  
Open `Data/Todo.db` in any SQLite tool:
```sql
UPDATE users SET is_admin = 1 WHERE name = 'yourLogin';
```
Logout ➜ login – you’re an admin.

---

## API surface (v1) <a name="api-surface"></a>
| Method & path | Body / query | Purpose |
|---------------|--------------|---------|
| **User** | | |
| `POST /api/user` | `name, password, isAdmin` | create account |
| `POST /api/user/ValidatePassword` | `name, password` | returns user id or `null` |
| **TodoList** | | |
| `GET  /api/todolist` | – | all lists |
| `POST /api/todolist` | `ownerId, description` | create list |
| **TodoTask** | | |
| `GET /api/todotask` | – | all tasks |
| `POST /api/todotask` | `ownerId, todoId, description, dueDate` | create task |

Full reference is always available in Swagger UI.

---

## Screenshots <a name="screenshots"></a>

The folder **`Screenshots/`** in the repository contains a few images that prove the project works end-to-end (main pages, etc.). Feel free to replace them with your own.

---