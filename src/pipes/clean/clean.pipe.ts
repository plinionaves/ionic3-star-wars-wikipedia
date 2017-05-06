import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean',
})
export class CleanPipe implements PipeTransform {

  transform(object: Object) {
    
    for (let key in object) {

      let currentKey = key.toLocaleLowerCase();

      if (
        currentKey == 'created'
        || currentKey == 'edited' 
        || currentKey == 'url') {
          delete object[key];
        }
    }

    return object;

  }
}
