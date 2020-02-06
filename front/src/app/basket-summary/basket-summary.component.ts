import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'basketSummary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css'],
})
export class BasketSummaryComponent implements OnInit {

  constructor(public basket:BasketService) { }

  ngOnInit() {
  }

}
