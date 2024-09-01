import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private APIurl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.APIurl);
  }

  AddTask(tarefa: Tarefa) : Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.APIurl}`, tarefa);
  }

  updateTask(tarefa: Tarefa) : Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.APIurl}/${tarefa.id}`, tarefa);
  }

  deleteTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.APIurl}/${tarefa.id}`);
  }
}
