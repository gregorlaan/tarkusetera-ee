import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteDetailComponent } from './quote/quote-detail.component';
import { QuoteListComponent } from './quote/quote-list.component';

const routes: Routes = [
  { path: '', component: QuoteListComponent },
  { path: 'tsitaat/:slug', component: QuoteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
