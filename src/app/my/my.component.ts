import {Component} from "@angular/core";

@Component({
  selector : 'app-my',
  templateUrl : './my.component.html'
})
export class MyComponent {

  name:string = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    fizz: 'buzz',
    nested:{
      xyz: 3,
      numbers: [1,2,3]
    }
  }
}
