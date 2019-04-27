import { Component, OnInit } from '@angular/core';
import { products } from '../data/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts = products;


  constructor() { }

  ngOnInit() {
  }

  paymentSuccess($event) {
    console.log('success');
  }

  paymentFailure() {
    // Handle payment failure
    console.log('failure');
  }

}
