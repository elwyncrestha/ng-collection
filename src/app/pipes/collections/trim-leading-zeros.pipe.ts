import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimLeadingZeros'
})
export class TrimLeadingZerosPipe implements PipeTransform {

  transform(value: any, splitter = ' '): any {
    const splitted = value.split(splitter);
    return (splitted as []).map((s) => isNaN(s * 1) ? s : (s * 1)).join(splitter);
  }

}
