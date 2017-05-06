import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {

  transform(object: Object, single: boolean, getKey: number) {
    let output;

    if (!single) {
      output = [];
      for (let key in object) {
        output.push({ key: key, value: object[key] });
      }
    } else {
      console.log(Object.keys(object));
      
      output = (getKey) ? Object.keys(object)[getKey] : Object.keys(object)[0];
    }

    return output;
  }

}
