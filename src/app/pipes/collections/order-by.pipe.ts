import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, prop?: string, isDesc?: boolean): unknown {
    if (value === null || value === undefined || value.length < 1) {
      return null;
    }

    if (isDesc) {
      return value.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    } else {
      return value.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
    }
  }

}
