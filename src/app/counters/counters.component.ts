import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent{

  @Input('counters') counters : [{id: number, value: number}];
  @Output() resetCounters = new EventEmitter();
  @Output() incrementCounter = new EventEmitter();
  @Output() decrementCounter = new EventEmitter();
  @Output() deleteCounter = new EventEmitter();
// Component method to reset counter values
  resetCounterValues(){
    console.log(`Reset Button is clicked`);
    this.resetCounters.emit(this.counters);
  }
//Component method to incrememt counter value
  incrementCounterValue(counter){
    console.log(`Increment Button of counter ${counter.id} is clicked`);
    this.incrementCounter.emit(counter);
  }
//Component method to decrement counter value
  decrementCounterValue(counter){
    console.log(`Increment Button of counter ${counter.id} is clicked`);
    this.decrementCounter.emit(counter);
}
//Component method to delete counter object
  deleteCounterValue(counter){
    console.log(`Delete Button of counter ${counter.id} is clicked`);
    this.deleteCounter.emit(counter);
  }
}
