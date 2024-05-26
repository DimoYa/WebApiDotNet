import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  products = [
    { name: 'Product 1' },
    { name: 'Product 2' },
    { name: 'Product 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
