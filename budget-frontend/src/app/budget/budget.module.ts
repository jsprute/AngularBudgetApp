import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SummaryPageComponent} from './pages/summary-page/summary-page.component';


@NgModule({
  declarations: [SummaryPageComponent],
  imports: [
    CommonModule
  ],
  exports: [SummaryPageComponent]
})
export class BudgetModule { }
