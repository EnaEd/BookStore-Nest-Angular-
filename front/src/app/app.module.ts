import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { BookListModule } from './book-list/book-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookListModule,
    HttpClientModule,
  ],
  providers: [BookService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
