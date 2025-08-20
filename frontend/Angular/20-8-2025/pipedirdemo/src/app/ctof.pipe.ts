import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ctof'
})
export class CtofPipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
  
    return (value * 9 / 5) + 32;
  }

}
