import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 quotes = [
// new Quote("Sarah","Tuitoek","Some days it shines while some days it rains"),
 ]


 plusQuote(quote) {
  let quoteLength = this.quotes.length;
   this.quotes.push(quote);
 }

  count = 0;
  upvote() {
    this.count = this.count + 1;
  }
  add = 0;
  downvote(){
    this.add = this.add + 1;
  }



  constructor() { }

  ngOnInit() {
  }



}
