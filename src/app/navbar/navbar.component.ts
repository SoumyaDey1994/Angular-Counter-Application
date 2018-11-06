import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {

  @Input('counters') counters : [{id: number, value: number, price : number}]

  noOfActiveCounter : number;
  totalPrice : number = 0;

  ngOnChanges() {
    this.noOfActiveCounter = this.counters.filter(counter => counter.value > 0).length;
    let activeCounters = this.counters.filter(counter => counter.value > 0);
    let price = 0;
    for(let item of activeCounters){
      price += item.price * item.value;
    }
    this.totalPrice = price;
  }

}
