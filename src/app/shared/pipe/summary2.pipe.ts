import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'summaryWord'
})
export class SummaryPipeWord implements PipeTransform {
    transform(value: string, limit: number = 10) {
        let words = value.split(' ');

        return words.slice(0, limit).join(' ') + '...';
    }
}


