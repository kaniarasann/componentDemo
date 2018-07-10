import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, length?: number) {
  return value.substr(length);
  }
}
