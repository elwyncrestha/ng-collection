import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimLeadingZeros'
})
export class TrimLeadingZerosPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value * 1;
  }

}
