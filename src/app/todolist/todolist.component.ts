import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todolist',
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
 tasklist:any[]=[];


 constructor(private router: Router) {
  
    this.loadTasks(); // ✅ Load tasks from localStorage when component initializes
  }
 navigateToNewTask() {
    this.router.navigate(['/new-task']); 
  }


  removeTask(id:any){
    console.log(id);
     this.tasklist = this.tasklist.filter(item => item.id !== id);
    this.saveTasks();
  }
  saveTasks() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tasklist', JSON.stringify(this.tasklist));
    }
  }

  loadTasks() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTasks = localStorage.getItem('tasklist');
      if (savedTasks) {
        this.tasklist = JSON.parse(savedTasks);
      }
    }
  }


}
