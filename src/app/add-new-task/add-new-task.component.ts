import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-new-task',
  imports: [CommonModule],
   standalone: true,
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
    tasklist:any[]=[];
constructor(private router:Router) {
    this.loadTasks(); // ✅ Load tasks from localStorage when component initializes
  }

  addtask(task:string){
     if(task.trim()){
    this.tasklist.push({id:this.tasklist.length,name:task});
    this.saveTasks();
    this.router.navigate(['/']);
     }
  } 
back(){
    this.router.navigate(['/']);
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
