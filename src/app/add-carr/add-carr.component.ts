import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-carr',
  templateUrl: './add-carr.component.html',
  styleUrls: ['./add-carr.component.css']
})
export class AddCarrComponent{

  @Output() onCarrAdd = new EventEmitter<String>();
  carrName = '';

  addCarr(){
    this.onCarrAdd.emit(this.carrName);
    this.carrName = '';
  }
}
