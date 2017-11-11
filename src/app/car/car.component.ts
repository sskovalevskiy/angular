import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  //Другой вариант использования селектора как атрибута другого тега. В данном случае в HTML-разметке вызывается через
  //добавление аттрибута обычного тега, например <div app-car></div>
  // selector: '[app-car]',
  //Третий вариант использования селектора - через class элемента. В разметке выглядит как: <div class="app-car"></div>
  //selector: '.app-car'

  templateUrl: './car.component.html',
  // template: `
  //   <h2>Single car</h2>
  //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sapiente?</p>
  // `,
  styleUrls: ['./car.component.css'],
  // styles: [`
  //   h2 {
  //     color: aqua;
  //   }
  // `]
})
export class CarComponent implements OnInit {

  carName:string = 'Ford';
  carYear:number = 2015;

  constructor() {
  }

  ngOnInit() {
  }

  getName() {
    return this.carName;
  }

}
