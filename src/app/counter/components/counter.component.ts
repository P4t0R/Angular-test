import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: ` 
    <h1>{{ title }}</h1> 
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    ` 
})
export class CounterComponent{
    public title:string = 'Mi Contador';
    public counter:number = 10;
  
    increaseBy(value:number):void{
      if(this.counter > 0 || value == 1){
        this.counter+=value;
      }
    }
  
    resetCounter():void{
      this.counter=10;
    }
}