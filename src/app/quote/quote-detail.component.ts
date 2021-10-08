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
  public quote?: Quote = {} as Quote;
  public date: Date = new Date();

  constructor(
    private _route: ActivatedRoute,
    private _quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.initQuote();
  }

  private initQuote(): void {
    this._route.params.subscribe(params => {
      const slug = params?.slug || '';
      this.setQuote(slug);
    })
  }

  private setQuote(slug: string) {
    this._quoteService.getQuote(slug).then(quote => {
      if (!quote) {
        this.quote = undefined;
        return;
      }

      this.quote = quote;
    });
  }

}
