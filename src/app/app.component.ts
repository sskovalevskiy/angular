import {Component} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [1, 2, 3, 4, 5];
  current = 1;
  searchCar: string = '';
  cars = [
    {name: 'Ford', year: 2015},
    {name: 'Audi', year: 2013},
    {name: 'BMW', year: 2015},
    {name: 'MAN', year: 2016},
    {name: 'Mazda', year: 2017}
  ];

  asyncTitle = Observable.of('Async title 3 seconds').delay(3000);

  onClick(number: number) {
    this.current = number;
  }
}
