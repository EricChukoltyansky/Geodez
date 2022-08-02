import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('transitionTrigger', [
      state(
        'true',
        style({
          alignItems: 'center',
          flexDirection: 'column',
          color: '#fff',
          display: 'flex',
          height: '30%',
        })
      ),
      transition('false => true', [animate('1s ease-in')]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  constructor() {}

  toggleInfoContainer: boolean = false;

  ngOnInit(): void {}

  handleShowInformation() {
    this.toggleInfoContainer = true;
  }
}
