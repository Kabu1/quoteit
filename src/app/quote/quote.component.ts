import { Component, OnInit } from '@angular/core';
import { quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[new quote("Nation","Kagwe mutahi","If you continue acting normally this disease will treat you abnormally"),
new quote("NYT","luther King","Slavery taught black people how to survive not live")]
  preNum:number
  lastNum:number
  counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
