import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';
import { TaskItemComponent } from "../task-item/task-item.component";
import { CommonModule, NgFor } from '@angular/common';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, CommonModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dados) => {
      this.tarefas = dados;

      console.log(dados);
    })
  }

  AddTask(tarefa: Tarefa) {
    this.taskService.AddTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;

    this.taskService.updateTask(tarefa).subscribe();
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => {
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)
    });
  }
}
