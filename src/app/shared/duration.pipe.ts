import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'duration'
})
export class DurationPipe implements PipeTransform{
    transform(value:number){
        switch(value){
            case 1 : return 'One hour'
            case 2 : return 'Two hour'
            case 3 : return 'Half Day'
            default : return 'Full Day'
        }
    }

}