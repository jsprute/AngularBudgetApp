import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { AccountTypeComponent } from './pages/tables/account-type/account-type.component';
import { MetaService } from '../shared/services/meta.service';
import { SharedModule } from '../shared/shared.module';
import {AccountTypeFormComponent} from './components/forms/account-type-form/account-type-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './pages/tables/account/account.component';
import { AccountFormComponent } from './components/forms/account-form/account-form.component';


@NgModule({
  declarations: [
    SummaryPageComponent, 
    AccountTypeComponent, 
    AccountTypeFormComponent, 
    AccountComponent, 
    AccountFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MetaService
  ],
  exports: [
    SummaryPageComponent, 
    AccountTypeComponent
  ]
})
export class AdminModule { }
