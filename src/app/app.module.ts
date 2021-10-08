import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import ET from '@angular/common/locales/et';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote/quote-list.component';
import { QuoteDetailComponent } from './quote/quote-detail.component';

registerLocaleData(ET, 'et');

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'et' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
