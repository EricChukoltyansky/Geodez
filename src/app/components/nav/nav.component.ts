import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() showAbout = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  handleAboutSection() {
    this.showAbout.emit(true);
  }
}
