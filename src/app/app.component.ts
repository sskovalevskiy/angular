import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'
import {CarrsService} from "./carrs.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  items = [1, 2, 3, 4, 5];
  current = 1;
  searchCar: string = '';
  asyncTitle = Observable.of('Async title 3 seconds').delay(3000);
  cars = [];

  constructor(private service: CarrsService) {

  }

  ngOnInit(): void {
    this.cars = this.service.cars;
  }

  onClick(number: number) {
    this.current = number;
  }
}
