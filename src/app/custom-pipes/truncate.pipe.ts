import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number): string {
    debugger;
    if (value.length <= limit) {
      return value;
    } else {
      return value.slice(0, limit) + '...';
    }
  }

}
