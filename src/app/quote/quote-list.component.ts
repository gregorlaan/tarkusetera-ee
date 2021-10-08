import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Quote } from './shared/quote.model';
import { QuoteService } from './shared/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {
  public quotes: Quote[] = [];
  public minDate: Date = new Date('2021-07-01');
  public maxDate: Date = new Date();
  public selectedDate: Date = new Date();

  constructor(
    private _router: Router,
    private _quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.initQuotes();
  }

  public dateSelected(date: any): void {
    this.selectedDate = date;

    this._quoteService.getQuoteByDate(date).then(quote => {
      const parameter = quote?.slug || '';
      this._router.navigate(['/tsitaat', parameter]);
    });
  }

  public dateClass() {
    return (date: any): MatCalendarCellCssClasses => {
      if(date < this.maxDate && date.isoWeekday() !== 7) {
        return 'special-date';
      }

      return '';
    };
  }

  private initQuotes(): void {
    this._quoteService.getQuotes().then(quotes => this.quotes = quotes);
  }

}
