import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <h2>Single car</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sapiente?</p>
  `,
  styles: [`
    h2 {
      color: aqua;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
