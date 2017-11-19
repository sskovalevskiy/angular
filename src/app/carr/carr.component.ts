import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carr',
  templateUrl: './carr.component.html',
  styleUrls: ['./carr.component.css']
})
export class CarrComponent {

  @Input() carr;

  getClass() {
    return {
      'list-group-item-success': !this.carr.isSold,
      'list-group-item-danger' : this.carr.isSold,
      'list-group-item': true
    }
  }

  onAction(type:string){
    this.carr.isSold = type === 'buy'? true : false;
  }
}
