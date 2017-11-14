import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName: string = '';
  carModel: string = '';
  carYear: number = 2017;
  // @Output() onAddCar = new EventEmitter<{name:string, year: number}>();
  @Output('onAddCar') carEmitter = new EventEmitter<{name:string, model: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addCar(carModelEl: HTMLInputElement) {

    this.carEmitter.emit({
      name: this.carName,
      model: carModelEl.value,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }


}
