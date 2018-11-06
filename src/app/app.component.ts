import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counters= [
    {
      id: 1,
      value : 0,
      price : 100
    },
    {
      id: 2,
      value : 0,
      price : 120
    },
    {
      id: 3,
      value : 0,
      price : 75
    },
    {
      id: 4,
      value : 0,
      price : 200
    },
    {
      id: 5,
      value : 0,
      price : 160
    }
  ];
  // method to increment value of selected counter
  incrementCounterValue(targetCounter){
    const counters = [... this.counters];
    let indexOfCounter = this.counters.findIndex(counter => counter.id === targetCounter.id);
    counters[indexOfCounter].value++;
    this.counters = [...counters];
  }
  //method to decrement value of selected counter
  decrementCounterValue(targetCounter){
    const counters = [... this.counters];
    let indexOfCounter = this.counters.findIndex(counter => counter.id === targetCounter.id);
    if(counters[indexOfCounter].value > 0)
      counters[indexOfCounter].value--;
    else
      counters[indexOfCounter].value = 0;

    this.counters = [...counters];
  }
  //method to delete selected counter from DOM
  deleteCounterObject(targetCounter){
    const counters = [... this.counters];
    let indexOfCounter = this.counters.findIndex(counter => counter.id === targetCounter.id);
    counters.splice(indexOfCounter , 1);
    this.counters = [...counters];
  }
  //method to reset all counter values
  resetCounterValues(){
    const counters = [... this.counters];
    const newCounters = counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    console.log(newCounters);
    this.counters = [...newCounters];
  }
}
