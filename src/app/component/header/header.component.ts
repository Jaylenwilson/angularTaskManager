import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Manager';

  constructor() { }
  // LIFECYCLE METHOD: USE TO RUN WHEN THE COMPONENT LOADS
  ngOnInit(): void {
  }

}
