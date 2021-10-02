import { Component, OnInit } from '@angular/core';
import { Quote } from './shared/quote.model';
import { QuoteService } from './shared/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  public quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  private getQuotes() {
    this.quoteService.getQuotes().then(quotes => this.quotes = quotes);
  }

}
