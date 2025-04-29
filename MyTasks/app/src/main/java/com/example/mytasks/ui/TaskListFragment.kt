package com.example.mytasks.ui

import android.app.AlertDialog
import android.content.Intent
import android.os.Bundle
import android.provider.CalendarContract
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.mytasks.data.TaskRepository
import com.example.mytasks.databinding.FragmentTaskListBinding

class TaskListFragment : Fragment() {

    private var _b: FragmentTaskListBinding? = null
    private val b get() = _b!!
    private lateinit var repo: TaskRepository

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View {
        _b = FragmentTaskListBinding.inflate(inflater, container, false)
        repo = TaskRepository.get(requireContext())
        setupList()
        return b.root
    }

    private fun setupList() {
        b.recyclerTasks.layoutManager = LinearLayoutManager(context)
        b.recyclerTasks.adapter = TaskAdapter(
            repo.all(),
            onChecked = { task -> repo.toggleDone(task); b.recyclerTasks.adapter?.notifyDataSetChanged() },
            onLongPress = { task -> confirmDelete(task) },
            onClick = { task -> openCalendar(task.title) }
        )
    }

    private fun confirmDelete(task: com.example.mytasks.data.Task) {
        AlertDialog.Builder(requireContext())
            .setTitle("Delete task?")
            .setMessage("Are you sure you want to delete \"${task.title}\"?")
            .setPositiveButton("Yes") { _, _ ->
                repo.delete(task)
                b.recyclerTasks.adapter?.notifyDataSetChanged()
            }
            .setNegativeButton("No", null)
            .show()
    }

    private fun openCalendar(title: String) {
        val intent = Intent(Intent.ACTION_INSERT)
            .setData(CalendarContract.Events.CONTENT_URI)
            .putExtra(CalendarContract.Events.TITLE, title)
        startActivity(intent)
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _b = null
    }

    override fun onResume() {
        super.onResume()
        b.recyclerTasks.adapter?.notifyDataSetChanged()
    }
}
