import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryPageComponent as BudgetSummary} from './budget/pages/summary-page/summary-page.component'
import {SummaryPageComponent as AdminSummary} from './admin/pages/summary-page/summary-page.component'
import {AccountTypeComponent} from './admin/pages/tables/account-type/account-type.component'
import {AccountComponent} from './admin/pages/tables/account/account.component'

const routes: Routes = [
  { path: 'summary', component: BudgetSummary },
  { path: 'admin/summary', component: AdminSummary },
  { path: 'admin/tables/accounttypes', component: AccountTypeComponent },
  { path: 'admin/tables/accounts', component: AccountComponent },
  { path: '',   redirectTo: '/summary', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
