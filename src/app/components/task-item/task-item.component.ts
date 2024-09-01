import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();

  faTimes = faTimes;

  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }

  OnDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }
}
