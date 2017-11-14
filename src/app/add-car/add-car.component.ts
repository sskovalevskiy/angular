import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName: string = '';
  carYear: number = 2017;
  // @Output() onAddCar = new EventEmitter<{name:string, year: number}>();
  @Output('onAddCar') carEmitter = new EventEmitter<{name:string, model: string, year: number, price: number}>();
  @ViewChild('carPriceInput') carPriceInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carModelEl: HTMLInputElement) {

    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear,
      model: carModelEl.value,
      price: +this.carPriceInput.nativeElement.value
    });
    this.carName = '';
    this.carYear = 2017;
    carModelEl.value = '';
    this.carPriceInput.nativeElement.value = '';
  }


}
