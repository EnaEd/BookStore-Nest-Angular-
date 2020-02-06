import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-basket-detail',
  templateUrl: './basket-detail.component.html',
  styleUrls: ['./basket-detail.component.css']
})
export class BasketDetailComponent implements OnInit {

  constructor(private readonly location: PlatformLocation) { }

  ngOnInit() {

    this.location.onPopState(() => {

      console.log('pressed back!');

    });
  }


}
