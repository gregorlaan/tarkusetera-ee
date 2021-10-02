import { Injectable } from '@angular/core';
import { QUOTES } from './quotes';

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
}
