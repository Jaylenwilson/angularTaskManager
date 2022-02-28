import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;

  constructor() {

  }

  ngOnInit(): void {
  }

  // to add an event to the html button I must first declare it here in the class
  onClick() {
    console.log('click')
  }
}
