package com.example.mytasks.ui

import android.app.AlertDialog
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatDelegate
import androidx.fragment.app.Fragment
import com.example.mytasks.data.TaskRepository
import com.example.mytasks.databinding.FragmentSettingsBinding

class SettingsFragment : Fragment() {

    private var _b: FragmentSettingsBinding? = null
    private val b get() = _b!!
    private lateinit var repo: TaskRepository

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, s: Bundle?
    ): View {
        _b  = FragmentSettingsBinding.inflate(inflater, container, false)
        repo = TaskRepository.get(requireContext())

        b.switchDark.isChecked =
            AppCompatDelegate.getDefaultNightMode() == AppCompatDelegate.MODE_NIGHT_YES

        b.switchDark.setOnCheckedChangeListener { _, on ->
            AppCompatDelegate.setDefaultNightMode(
                if (on) AppCompatDelegate.MODE_NIGHT_YES
                else    AppCompatDelegate.MODE_NIGHT_NO
            )
        }

        b.btnClear.setOnClickListener {
            AlertDialog.Builder(requireContext())
                .setTitle("Clear completed?")
                .setMessage("This will remove all tasks marked as done.")
                .setPositiveButton("Yes") { _, _ -> repo.clearCompleted() }
                .setNegativeButton("No", null)
                .show()
        }
        return b.root
    }

    override fun onDestroyView() { super.onDestroyView(); _b = null }
}
