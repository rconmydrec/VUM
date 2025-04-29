package com.example.mytasks.data

data class Task(
    val id: Long,
    var title: String,
    var done: Boolean = false
)
