import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CarrsService} from "../carrs.service";

@Component({
  selector: 'app-add-carr',
  templateUrl: './add-carr.component.html',
  styleUrls: ['./add-carr.component.css']
})
export class AddCarrComponent{
  carrName = '';

  constructor(private service: CarrsService){
  }

  addCarr(){
    this.service.addCar(this.carrName);
  }

  @Output() onCarrAdd = new EventEmitter<String>();

}
