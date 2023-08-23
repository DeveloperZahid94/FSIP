import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(Listvalue:any[], fliterString:string): any[] {
    if(Listvalue?.length==0 || fliterString==''){
      return Listvalue;
    }
    return Listvalue?.filter((val: any) => {
      return (
        val.userName?.toLowerCase().includes(fliterString.toLowerCase()) ||
        val.reason?.toLowerCase().includes(fliterString.toLowerCase())
      );
    });
  }

  

}
