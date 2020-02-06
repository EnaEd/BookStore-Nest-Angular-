import { BookListComponent } from './book-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng5SliderModule } from 'ng5-slider';
import { CounterDirective } from '../directives/counter.directive';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { BasketSummaryComponent } from '../basket-summary/basket-summary.component';
  
  



@NgModule({
    imports:[BrowserModule,FormsModule,NgMultiSelectDropDownModule.forRoot(),Ng5SliderModule,AutocompleteLibModule],
    declarations:[BookListComponent,CounterDirective,BasketSummaryComponent],
    exports:[BookListComponent]
})
export class BookListModule{}