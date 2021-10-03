import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'moment';
import { Quote } from './shared/quote.model';
import { QuoteService } from './shared/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {
  public quotes: Quote[] = [];

  constructor(
    private _router: Router,
    private _quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  public dateSelected(date: Moment): void {
    this._quoteService.getQuoteByDate(date).then(quote => {
      if(!quote?.slug) {
        return;
      }

      this._router.navigate(['/tsitaat', quote.slug]);
    });
  }

  private getQuotes(): void {
    this._quoteService.getQuotes().then(quotes => this.quotes = quotes);
  }

}
