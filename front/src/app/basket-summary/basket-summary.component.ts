import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'basketSummary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css'],
})
export class BasketSummaryComponent implements OnInit {

  constructor(public basket: BasketService, private readonly router: Router) { }

  ngOnInit() {
  }

  routeToDetail() {
    console.log("in route method");
    this.router.navigateByUrl("/basketdetail");
  }
  alert(){
    console.log("in route method");
    alert("test");
  }
  focus(event:any){
    event=false;
    console.log("in route method");
  }

}
