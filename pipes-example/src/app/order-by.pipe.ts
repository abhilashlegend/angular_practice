import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, fn: Function = (a,b) => a > b ?  1 : -1): any {
    return value.sort(fn);
  }

}
