import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  toggleInfoContainer: boolean = false;

  ngOnInit(): void {}

  handleShowInformation() {
    this.toggleInfoContainer = true;
  }
}
