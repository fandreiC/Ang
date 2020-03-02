import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public greeting = "..X..";
  public eventProp = "-";
  public name = "-y-";
  public displayName=false;
  public colors = ["red" , "blue", "green", "yellow"];

  public cName= "Component Virus";
  @Input('parrentData') public DataFromParrent;
  @Output() public childEvent = new EventEmitter();
  private eventMessage = "-virus from child event-";

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){    

    this.childEvent.emit(this.eventMessage);
  }

  logMessage(value){
    console.log(value);
  }

  onClick2(){
    this.greeting ="polymorphism";
    console.log(this.greeting);
    this.displayName=false;
  }

  onClick(event){
    console.log(this.greeting);
    console.log(event);
    this.greeting = "Greet Message for console";
    this.eventProp = event.type;
    this.displayName=true;
  }

}
