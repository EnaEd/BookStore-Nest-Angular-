import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-basket-detail',
  templateUrl: './basket-detail.component.html',
  styleUrls: ['./basket-detail.component.css']
})
export class BasketDetailComponent implements OnInit {

  constructor(public basketService:BasketService) { }

  ngOnInit() {
console.log(this.basketService.lines);
   
  }


}
