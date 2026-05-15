import { Pipe, PipeTransform } from "@angular/core";
import { IPlayer } from "../models/cricketer";


@Pipe({
    name: 'filterPlayer'
})
export class FilterPipe implements PipeTransform {
    transform(value: Array<IPlayer>, searchValue?: string): IPlayer[] {
        if (searchValue) {
            let filterArr = value.filter(p => {
                return p.team.toLowerCase().includes(searchValue.toLowerCase())
            })
            return filterArr
        }
       return value 

    }
}

