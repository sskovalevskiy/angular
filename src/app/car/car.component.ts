import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  //Можно из html-шаблона передавать само свойство carItem,
  // а можно его указать в alias(названия того параметра, который мы ожидаем) аннотации @Input
  // @Input() carItem: { name: string, year: number }
  @Input('carItem') car: { name: string, model:string, year: number }

}
