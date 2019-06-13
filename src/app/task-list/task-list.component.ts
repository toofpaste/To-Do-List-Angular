import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @Input() childTaskList: Task[];
    @Output() clickSender = new EventEmitter();
    tasks: Task[] = [
      new Task('Finish weekend Angular homework for Epicodus course', 'HIGH'),
      new Task('Begin brainstorming possible JavaScript group projects', 'MEDIUM'),
      new Task('Add README file to last few Angular repos on GitHub', 'MEDIUM')
    ];

    priorityColor(currentTask){
      if (currentTask.priority === 'HIGH'){
        return "bg-danger";
      } else if (currentTask.priority === 'MEDIUM') {
        return  "bg-warning";
      } else {
        return "bg-info";
      }
    }
    editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
    }
    onChange(optionFromMenu) {
      this.filterByCompleteness = optionFromMenu;
    }
    toggleDone(clickedTask: Task, setCompleteness: boolean) {
   clickedTask.done = setCompleteness;
 }
    constructor() { }

    ngOnInit() {
    }
  }
