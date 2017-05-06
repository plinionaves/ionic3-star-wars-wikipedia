import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, onlyFirst: boolean, skipUnderscore: boolean) {    

    if (!onlyFirst && !skipUnderscore) {
      let output: string = '';
      let words: string[] = value.split(' ');

      words.forEach((value: string, index: number, words: string[]) => {
        output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
      });

      return output;

    }

    return (!skipUnderscore) ?
      value.charAt(0).toUpperCase() + value.substr(1) :
      (value.charAt(0).toUpperCase() + value.substr(1)).replace(/_/g, ' ');

  }

}
