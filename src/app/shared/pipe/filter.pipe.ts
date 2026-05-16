import { Pipe, PipeTransform } from "@angular/core";
import { IPlayer } from "../models/cricketer";

@Pipe({
    name: 'filterPlayer'
})
export class FilterPipe implements PipeTransform {
    transform(value: Array<IPlayer>, searchValue?: string, filterBy: string = 'team'): IPlayer[] {
        if (searchValue) {
            let filterArr = value.filter(p => {
                if (filterBy === 'player') {
                    return p.name.toLowerCase().includes(searchValue.toLowerCase());
                } else if (filterBy === 'yearDebut') {
                    return p.yearDebut.toString().includes(searchValue);
                } else {
                    return p.team.toLowerCase().includes(searchValue.toLowerCase());
                }
            });
            return filterArr;
        }
        return value;
    }
}