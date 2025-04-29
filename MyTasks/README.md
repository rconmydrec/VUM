# MyTasks

![Kotlin](https://img.shields.io/badge/Language-Kotlin-orange.svg)
![Android](https://img.shields.io/badge/Platform-Android-brightgreen.svg)

## 📌 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture & Patterns](#architecture--patterns)
- [Dependencies](#dependencies)
- [Setup & Run](#setup--run)
- [Usage](#usage)

---

## Overview
**MyTasks** is a minimalist yet fully functional Android To-Do application built with **Kotlin**. It showcases modern Android development practices including clean architecture, Jetpack components, and background processing.

## Features
- **Task List**: View and manage tasks loaded from a local file (≥10 initial entries).
- **Add Task**: Create new tasks with an option to enable reminders.
- **Settings**:
  - Toggle **Dark Mode**.
  - **Clear completed** tasks with a confirmation dialog.
- **Task Actions**:
  - Mark tasks done/undone with a **CheckBox**.
  - **Long-press** to delete a task.
  - **Tap** to open the system Calendar pre-filled with the task title.
- **Background Reminders**: Scheduled notifications every 2 hours via **WorkManager**.
- **Responsive UI**: Material **BottomNavigationView** with hide-on-scroll behavior.

## Architecture & Patterns
- **Repository Pattern**: `TaskRepository` singleton separates data from UI.
- **Jetpack Components**:
  - **Navigation Component** (NavHost, NavGraph) for in-app navigation.
  - **ViewBinding** for type-safe view access.
  - **WorkManager** for reliable background tasks.
- **Package Structure**: Organized into `data/`, `ui/`, and `work/` modules.

## Dependencies
- AndroidX Core KTX  
- AppCompat  
- Material Components  
- Navigation Fragment & UI KTX  
- RecyclerView  
- WorkManager Runtime KTX  

## Setup & Run
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/MyTasks.git
   ```
2. **Open in Android Studio**  
   - File → Open → select the project directory.
3. **Build & Deploy**  
   - Connect a device or launch an emulator.
   - Click **Run** (▶) and choose your target.

## Usage
1. Navigate to **Tasks** to view the list.
2. Go to **Add** to create a new task; toggle reminders if needed.
3. Use the **CheckBox** to mark completion.
4. **Long-press** an item to delete it.
5. Tap a task to open the Calendar.
6. Toggle **Dark Mode** or **Clear completed** tasks in Settings.
