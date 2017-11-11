import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar: boolean = false;
  addCarStatus: string = '';
  inputText: string = '';

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 5000)
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }

  onInput(event: Event) {
    console.log(event);
    this.inputText = (<HTMLInputElement> event.target).value;
  }
}
