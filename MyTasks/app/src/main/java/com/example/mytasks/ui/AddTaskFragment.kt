package com.example.mytasks.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.View.OnFocusChangeListener
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.example.mytasks.data.TaskRepository
import com.example.mytasks.databinding.FragmentAddTaskBinding

class AddTaskFragment : Fragment() {

    private var _b: FragmentAddTaskBinding? = null
    private val b get() = _b!!
    private lateinit var repo: TaskRepository

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View {
        _b = FragmentAddTaskBinding.inflate(inflater, container, false)
        repo = TaskRepository.get(requireContext())

        b.editTask.onFocusChangeListener = OnFocusChangeListener { _, hasFocus ->
            if (!hasFocus && b.editTask.text.isEmpty())
                b.editTask.error = "Title is required"
        }

        b.btnSave.setOnClickListener {
            val title = b.editTask.text.toString().trim()
            if (title.isEmpty()) {
                Toast.makeText(context, "Enter task title", Toast.LENGTH_SHORT).show()
            } else {
                repo.add(title)

                requireActivity()
                    .supportFragmentManager
                    .popBackStack()

                b.editTask.text.clear()
                Toast.makeText(context, "Saved", Toast.LENGTH_SHORT).show()
            }
        }

        b.switchReminder.setOnCheckedChangeListener { _, checked ->
            if (checked) Toast.makeText(context, "Reminder ON (stub)", Toast.LENGTH_SHORT).show()
        }

        return b.root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _b = null
    }
}
