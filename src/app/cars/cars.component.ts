import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  //ViewEncapsulation.None/Native - для того, чтобы стили применялись глобально ко всем компонентам
  // encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  cars: [{ name: string, year: number }] = [
    {
      name: 'Ford', year: 2013
    }, {
      name: 'Audi', year: 2011
    }, {
      name: 'BMW', year: 2017
    }, {
      name: 'MAN', year: 2005
    }, {
      name: 'Mazda', year: 2013
    }];

  updateCarList(car: {name:string, year: number}){
    this.cars.push(car);
  }
}
