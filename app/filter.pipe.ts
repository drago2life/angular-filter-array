import { Component,NgModule, Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, filter: {[key: string]: any },arrayValues): Array<any> {
      if(filter){        
        return items.filter(item => {
          console.log(item['model'])
          let notMatchingField = Object.keys(filter)
                                .find(key => filter[key].indexOf(item[key]) == -1);
                  return !notMatchingField;
        });
                 
    }else{
        let notMatchingField=items;
        return notMatchingField
      }
        


                 // true if matches all fields
           
    }
}