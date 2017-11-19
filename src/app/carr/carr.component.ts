import {Component, Input} from '@angular/core';
import {ConsoleService} from "../console.service";

@Component({
  selector: 'app-carr',
  templateUrl: './carr.component.html',
  styleUrls: ['./carr.component.css'],
  providers: [ConsoleService]
})
export class CarrComponent {

  @Input() carr;

  constructor(private consoleService: ConsoleService) {

  }

  getClass() {
    return {
      'list-group-item-success': !this.carr.isSold,
      'list-group-item-danger': this.carr.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.carr.isSold = (type === 'buy');
    // console.log(`${this.carr.name} was ${type === 'buy'? 'sold' : 'returned'}`);
    this.consoleService.log(`${this.carr.name} was ${type === 'buy' ? 'sold' : 'returned'}`)
  }
}
