package com.example.mytasks.data

import android.content.Context
import java.io.File

class TaskRepository private constructor(private val context: Context) {

    private val file: File = File(context.filesDir, "tasks.txt")
    private val tasks = mutableListOf<Task>()

    companion object {
        @Volatile private var INSTANCE: TaskRepository? = null
        fun get(ctx: Context): TaskRepository =
            INSTANCE ?: synchronized(this) {
                INSTANCE ?: TaskRepository(ctx.applicationContext).also { INSTANCE = it }
            }
    }

    fun all(): List<Task> = tasks
    fun add(title: String)        { tasks += Task(System.currentTimeMillis(), title); save() }
    fun toggleDone(t: Task)       { t.done = !t.done;  save() }
    fun delete(t: Task)           { tasks -= t;        save() }
    fun clearCompleted()          { tasks.removeAll { it.done }; save() }

    private fun loadOnce() {
        if (tasks.isNotEmpty()) return

        val sourceLines: List<String> =
            if (file.exists()) file.readLines()
            else context.assets.open("tasks.txt").bufferedReader().readLines()

        tasks += sourceLines.map { Task(System.currentTimeMillis() + it.hashCode(), it) }
        save()
    }

    private fun save() = file.printWriter().use { out ->
        tasks.forEach { out.println(it.title) }
    }

    init { loadOnce() }
}
