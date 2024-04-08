import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'stopclock';
  millisec:number=0;
  second:number=0;
  minutes:number=0;
  hour:number=0;
  interval:any;
  mincolor:boolean=false;
  hourcolor:boolean=false;
  timerPassed:boolean=false;
  timerRunning:boolean=false;
  status!: string;
  totalTiming!:string;

  startTimer(){
    if (!this.timerRunning) {
      this.timerRunning = true;
    this.interval= setInterval(()=>{
      this.millisec++;
      if(this.millisec>=100){
        this.second++;
        this.millisec=0;
      }
      if(this.second==60){
        this.minutes++;
        this.second=0;
        this.mincolor=true;
      }
      if(this.minutes==60){
        this.hour++;
        this.minutes=0;
        this.hourcolor=true;
      } 
    },10);  
    this.status="RUNNING";
  }}

  stopTimer():void{
    clearInterval(this.interval);
    this.timerRunning = false;
    this.status="STOP"; 
    this.timerPassed=true;
  }

  restartTimer(){
    this.millisec=0;
    this.second=0;
    this.minutes=0;
    this.hour=0;
    clearInterval(this.interval);
    this.timerRunning = false;
    this.status="RESTART";
  }
}
