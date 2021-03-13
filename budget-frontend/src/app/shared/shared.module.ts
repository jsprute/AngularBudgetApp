import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component'
import { AppRoutingModule } from './../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SideMenuSegmentComponent } from './components/side-menu-segment/side-menu-segment.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';

@NgModule({
  declarations: [SideMenuComponent, PopUpComponent, SideMenuSegmentComponent, SimpleTableComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient
  ],
  exports: [SideMenuComponent,SimpleTableComponent,PopUpComponent]
})
export class SharedModule { }
