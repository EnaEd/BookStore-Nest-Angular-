import { BasketDetailComponent } from '../components/basket-detail/basket-detail.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng5SliderModule } from 'ng5-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CounterDirective } from '../directives/counter.directive';
import { BasketSummaryComponent } from '../components/basket-summary/basket-summary.component';


@NgModule({
    imports: [BrowserModule, FormsModule, NgMultiSelectDropDownModule.forRoot(), Ng5SliderModule, AutocompleteLibModule],
    declarations: [BookListComponent, CounterDirective, BasketSummaryComponent, BasketDetailComponent],
    exports: [BookListComponent]
})
export class BookListModule { }