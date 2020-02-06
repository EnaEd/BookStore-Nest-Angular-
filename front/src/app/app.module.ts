import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { BookListModule } from './modules/book-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import 'hammerjs';
import { BasketService } from './services/basket.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookListModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [BookService, HttpService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
