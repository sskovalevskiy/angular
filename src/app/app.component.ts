import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'
import {CarrsService} from "./carrs.service";
import {NgForm} from "@angular/forms";
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

  cars = [
    {name: 'Ford', year: 2015, isSold:false},
    {name: 'Audi', year: 2013, isSold:false},
    {name: 'BMW', year: 2015, isSold:true},
    {name: 'MAN', year: 2016, isSold:true},
    {name: 'Mazda', year: 2017, isSold:false}
  ];
  asyncTitle = Observable.of('Async title 3 seconds').delay(3000);
  answers = [{type:'yes', text:'Да'},{type:'no', text:'Нет'}];

  constructor(private service: CarrsService) {

  }

  ngOnInit(): void {
    this.cars = this.service.cars;
  }

  onClick(number: number) {
    this.current = number;
  }

  submitForm(form: NgForm) {
    console.log('Submitted!', form)
  }

  addCarToList(carName: string){
    this.cars.push({
      name: carName,
      year: 2017,
      isSold: false
    });
  }
}
