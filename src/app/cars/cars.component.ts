import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar: boolean = false;
  addCarStatus: string = '';
  carWasAdded: boolean = false;
  inputEvent: string = '';
  inputText: string = '';
  inputTextAfterEnter: string = 'Введите Ваш вопрос';

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 5000)
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }

  addCar2() {
    this.carWasAdded = true;
  }

  onInputEvent(event: Event) {
    console.log(event);
    this.inputEvent = (<HTMLInputElement> event.target).value;
  }

  onInputValue(value) {
    this.inputText = value;
  }

  onKeyUp(event) {
    //Для первого(закоментированного) варианта обработки ввода по нажатию Enter в шаблоне
    // if (event.code === 'Enter') {
    //   this.inputTextAfterEnter = event.target.value;
    // }
    this.inputTextAfterEnter = event.target.value;
  }
}
