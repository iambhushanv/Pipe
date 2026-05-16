import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { SummaryPipe } from './shared/pipe/summary.pipe';
import { SummaryPipeWord } from './shared/pipe/summary2.pipe';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    SummaryPipeWord,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
