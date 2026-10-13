import { Pipe, PipeTransform } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(objs:any[],ch:string):any {
    if(!objs||!ch||ch.trim()===''){
    return [];
    }
    ch=ch.toLowerCase();
      return objs.filter((obj:any)=>{
        const name=obj?.name?.toLowerCase()||'';
        const price=obj?.price?.toString()||'';
        return name.includes(ch) || price.includes(ch);
      });
    
  }

}
