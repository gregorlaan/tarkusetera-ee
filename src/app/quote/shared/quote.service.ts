import { Injectable } from '@angular/core';
import { QUOTES } from './quotes';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getQuotes() {
    return Promise.resolve(QUOTES);
  }

  getQuote(slug: string) {
    const quote = QUOTES.find(quote => quote.slug === slug);
    return Promise.resolve(quote);
  }

  getQuoteByDate(date: Moment) {
    const quote = QUOTES.find(quote => quote.isoDate === date.format('YYYY-MM-DD'));
    return Promise.resolve(quote);
  }
}
