import { BookListFirstGuard } from './guards/book-list-first.guard';
import { BasketDetailComponent } from './components/basket-detail/basket-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "basketdetail", component: BasketDetailComponent, canActivate: [BookListFirstGuard] },
  { path: "booklist", component: BookListComponent},
  { path: "**", redirectTo: "/booklist" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [BookListFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
