package com.example.mytasks.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.mytasks.data.Task
import com.example.mytasks.databinding.ItemTaskBinding

class TaskAdapter(
    private val items: List<Task>,
    private val onChecked: (Task) -> Unit,
    private val onLongPress: (Task) -> Unit,
    private val onClick: (Task) -> Unit
) : RecyclerView.Adapter<TaskAdapter.VH>() {

    inner class VH(val b: ItemTaskBinding) : RecyclerView.ViewHolder(b.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH {
        val binding = ItemTaskBinding.inflate(
            LayoutInflater.from(parent.context), parent, false)
        return VH(binding)
    }

    override fun onBindViewHolder(holder: VH, position: Int) {
        val task = items[position]
        with(holder.b) {
            checkDone.setOnCheckedChangeListener(null)   // <-- СБРОС
            checkDone.isChecked = task.done
            textTitle.text      = task.title

            checkDone.setOnCheckedChangeListener { _, _ -> onChecked(task) }
            root.setOnLongClickListener { onLongPress(task); true }
            root.setOnClickListener     { onClick(task) }
        }
    }

    override fun getItemCount() = items.size
}
