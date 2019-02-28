import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let strArray = [];
    strArray = value.split('');
    let resArray = [];
    for(let i = strArray.length; i >= 0; i--){
    	resArray.push(strArray[i]);
    }

    return resArray.join('');
  }

}
