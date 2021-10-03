import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from './shared/quote.model';
import { QuoteService } from './shared/quote.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  public quote: Quote = {} as Quote;

  constructor(
    private _route: ActivatedRoute,
    private _quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.getQuote();
  }

  private getQuote(): void {
    const slug = this._route.snapshot.paramMap.get('slug') ?? '';
    this._quoteService.getQuote(slug).then(quote => {
      if (!quote) {
        return;
      }

      this.quote = quote;
    });
  }

}
