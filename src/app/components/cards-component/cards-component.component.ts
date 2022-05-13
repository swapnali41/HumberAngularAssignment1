import { Component, Input, OnInit } from '@angular/core';
import { productData } from 'src/app/models/product-data';

@Component({
  selector: 'cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})
export class CardsComponent implements OnInit {
  data = productData;
  constructor() { }

  ngOnInit(): void {
  }

}
