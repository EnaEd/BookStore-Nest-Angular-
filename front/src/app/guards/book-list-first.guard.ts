import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BookListComponent } from '../components/book-list/book-list.component';

@Injectable()
export class BookListFirstGuard {

    private firstNavigation = true;

    constructor(private readonly router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.firstNavigation) {
            return true;
        }
            this.firstNavigation = false;
            if (route.component != BookListComponent) {
                this.router.navigateByUrl("/");
                return false;
            }

    }
}