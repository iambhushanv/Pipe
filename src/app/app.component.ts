import { Component } from '@angular/core';
import { cricketers } from './shared/const/cricketer.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Lorem ipsum dolor sit amet consectetbu nostrum ad voluptatem corporis lskfja djht isd jthe tomar kdfh jotrttion tempore id illo dignissimos placeat!' 
       
  course = {
    title : "Angular Developer",
    students : 123456,
    rating : 4.62334,
    price : 199,
    releaseDate : new Date(2025, 1, 26)
  }

  playersArr = cricketers

  searchValue !: string

}
