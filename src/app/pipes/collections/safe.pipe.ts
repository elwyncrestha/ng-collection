import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export enum SafePipeType {
  HTML, STYLE, SCRIPT, URL, RESOURCE_URL
}

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private ds: DomSanitizer) {}

  transform(value: any, type: SafePipeType): unknown {
    switch (type) {
      case SafePipeType.HTML:
        return this.ds.bypassSecurityTrustHtml(value);
      case SafePipeType.STYLE:
        return this.ds.bypassSecurityTrustStyle(value);
      case SafePipeType.SCRIPT:
        return this.ds.bypassSecurityTrustScript(value);
      case SafePipeType.URL:
        return this.ds.bypassSecurityTrustUrl(value);
      case SafePipeType.RESOURCE_URL:
        return this.ds.bypassSecurityTrustResourceUrl(value);
    }
  }

}
