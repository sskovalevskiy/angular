import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName: string = '';
  carYear: number = 2017;

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

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear});
    this.carName = '';
    this.carYear = 2017;
  }
}
