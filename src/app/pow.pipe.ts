import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform{

  transform(value: number, pownumber: number) {
    return Math.pow(value, pownumber);
  }


}
