import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libLekhaSearchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, search: string, searchBy: string): any {
    if(!search) { return value; }
    let solution = value.filter(v => 
      {        
        if(!v) return;
        return v[searchBy].toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

      return solution;
  }
}