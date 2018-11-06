import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{

  @Input('counter') counter : {id: number , value: number};
  @Output() deleteCounter = new EventEmitter();
  @Output() incrementCounter = new EventEmitter();
  @Output() decrementCounter = new EventEmitter();

  getCounterValueToDisplay(value){
    return value == 0 ? 'Zero' : value;
  }
// Increment Counter Value
  incrementCounterValue(counter){
    console.log(`Increment Button of counter ${counter.id} is clicked`);
    this.incrementCounter.emit(counter);
  }
// Decrement Counter Value  
  decrementCounterValue(counter){
    console.log(`Decrement Button of counter ${counter.id} is clicked`);
    this.decrementCounter.emit(counter);
  }

  deleteCounterObject(counter){
    console.log(`Delete Button Clicked`);
    this.deleteCounter.emit(counter);
  }
}
