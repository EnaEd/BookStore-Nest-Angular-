
import { BookService } from '../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { Options } from 'ng5-slider';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AppSettings } from '../../app.settings';
import { BasketService } from '../../services/basket.service';
import { Location } from '@angular/common';


@Component({
  selector: 'booklist',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //#region variables



  private sliderHighValue: number;
  private sliderLowValue: number;

  public selectedTitle: string[] = null;
  public selectedTypes: string[] = null;
  public selectedPriceRange: number[] = null;
  public selectedCategories: string[] = null;
  public selectedAuthors: string[] = null;
  public dropdownSettings: IDropdownSettings = {};
  public optionsSlider: Options = {};

  public productsPerPage = 3;
  public selectedPage = 1;
  public keyword = "title";
  public placeholder = "Search Book";

  //#endregion variables

  constructor(private readonly bookService: BookService, private readonly basket: BasketService,
    private readonly location: Location) {
    this.changeFilter();
  }

  ngOnInit() {

    this.location.onUrlChange((url: string, state: unknown) => {
      console.log("Location changes to " + url);
      console.log(state);
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    //default set need for UI
    this.optionsSlider = {
      floor: 0,
      ceil: 1000
    }

  }

  //#region properties

  get books(): Book[] {
    return this.bookService.getBooks();
  }

  get categories(): string[] {
    return this.bookService.getCategories();
  }

  get authors(): string[] {
    return this.bookService.getAuthors();
  }

  get types(): string[] {
    return this.bookService.getTypes();
  }

  get prices(): number[] {
    return this.bookService.getPrices();
  }

  get titles(): string[] {
    return this.bookService.getTitles();
  }

  get optionsSliderRange(): Options {
    //for first set price range
    if (this.prices.length > 0 &&
      this.optionsSlider.floor != this.prices[0] &&
      this.optionsSlider.ceil != this.prices[this.prices.length]) {
      this.optionsSlider = {
        floor: this.prices[0],
        ceil: this.prices[this.prices.length - 1]
      }
      this.selectedPriceRange = [this.optionsSlider.floor, this.optionsSlider.ceil];
    }
    return this.optionsSlider;
  }

  get sliderValue(): number {
    this.sliderLowValue = this.prices[0];
    return this.sliderLowValue;
  }

  set sliderValue(number: number) {
    this.sliderLowValue = number;

    if (this.selectedPriceRange) {
      this.selectedPriceRange[0] = this.sliderLowValue;
      this.changeFilter();
    }
  }

  get highSliderValue(): number {
    this.sliderHighValue = this.prices[this.prices.length - 1];
    return this.sliderHighValue;
  }
  set highSliderValue(number: number) {
    this.sliderHighValue = number;
    if (this.selectedPriceRange) {
      this.selectedPriceRange[this.selectedPriceRange.length - 1] = this.sliderHighValue;
      this.changeFilter();
    }
  }

  get pageCount(): number {
    return this.bookService.getPageCount();
  }

  get itemCount() {
    return this.bookService.getItemCount();
  }

  get totalItems() {
    return this.bookService.getTotalItems();
  }

  get nextPage() {
    return this.bookService.getNextPage();
  }

  get previousPage() {
    return this.bookService.getPreviousPage();
  }

  //#endregion properties

  //#region methods
  selectEvent(item) {

  }
  onChangeSearch(value: string) {
    this.selectedTitle = value.split(',');
    this.changeFilter();
  }

  onFocused(e) {
    // do something when input is focused
  }


  changeFilter() {

    //change UI active page number
    this.selectedPage = 1;

    let url = `${AppSettings.CONNECTION_STRING}/book?page=0&limit=${this.productsPerPage}`;
    this.bookService.changeFilter(this.selectedCategories, this.selectedTypes,
      this.selectedAuthors, this.selectedTitle, this.selectedPriceRange, null, this.productsPerPage, url);
  }

  goToPrevious() {
    this.selectedPage = --this.selectedPage;
    this.bookService.changeFilter(this.selectedCategories, this.selectedTypes,
      this.selectedAuthors, null, this.selectedPriceRange, null, this.productsPerPage, this.previousPage);
  }

  goToNext() {
    this.selectedPage = ++this.selectedPage;
    this.bookService.changeFilter(this.selectedCategories, this.selectedTypes,
      this.selectedAuthors, null, this.selectedPriceRange, null, this.productsPerPage, this.nextPage);

  }

  changePage(newPage: number) {
    //change UI active page number
    this.selectedPage = newPage;

    let url = `${AppSettings.CONNECTION_STRING}/book?page=${newPage}&limit=${this.productsPerPage}`;
    this.bookService.changeFilter(this.selectedCategories, this.selectedTypes,
      this.selectedAuthors, null, this.selectedPriceRange, newPage, this.productsPerPage, url);
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  addCategoryToFilter(newCategory?: string) {
    if (newCategory) {
      this.selectedCategories.push(newCategory);
    }
    this.changeFilter();
  }

  removeCategoryFromFilter(category?: string) {
    if (category && this.selectedCategories.indexOf(category) != -1) {
      this.selectedCategories.splice(this.selectedCategories.indexOf(category), 1);
    }
    if (!this.selectedCategories.some(item => item != undefined)) {
      this.selectedCategories = null;
    }
    this.changeFilter();
  }

  addAuthorToFilter(newAuthor?: string) {
    if (newAuthor) {
      this.selectedAuthors.push(newAuthor);
      this.changeFilter();
    }
  }

  removeAuthorFromFilter(author?: string) {
    if (author && this.selectedAuthors.indexOf(author) != -1) {
      this.selectedAuthors.splice(this.selectedAuthors.indexOf(author), 1);
    }
    if (!this.selectedAuthors.some(item => item != undefined)) {
      this.selectedAuthors = null;
    }
    this.changeFilter();
  }

  addTypeToFilter(newType?: string) {
    if (newType) {
      this.selectedTypes.push(newType);
    }

    this.changeFilter();
  }

  removeTypeFromFilter(type?: string) {
    if (type && this.selectedTypes.indexOf(type) != -1) {
      this.selectedTypes.splice(this.selectedTypes.indexOf(type), 1);
    }
    if (!this.selectedTypes.some(item => item != undefined)) {
      this.selectedTypes = null;
    }
    this.changeFilter();
  }

  addBookToBasket(book: Book) {
    this.basket.addLine(book);
  }
  //#endregion methods
}
