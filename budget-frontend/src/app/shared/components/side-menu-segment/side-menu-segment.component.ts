import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';


@Component({
  selector: 'app-side-menu-segment',
  templateUrl: './side-menu-segment.component.html',
  styleUrls: ['./side-menu-segment.component.scss'],
  animations: [
    trigger('toggleBox', [
      state('open', style({
        opacity: '1'
      })),
      state('closed', style({
        opacity: '0',
        height: 0
      })),
      transition('open => closed', [
        animate('.2s')
      ]),
      transition('closed => open', [
        animate('.2s')
      ]),
    ])
  ]
})
export class SideMenuSegmentComponent implements OnInit {

  constructor() { }

  @Input() 
  content: any;
  openState: boolean = false;

  ngOnInit(): void {
  }

  toggleView(): void {
    this.openState = !this.openState;
  }

}
