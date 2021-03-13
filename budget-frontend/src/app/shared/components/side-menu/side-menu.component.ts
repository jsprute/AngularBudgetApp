import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {


  constructor() {   }

  menuMain: any = {
    title:"Budget",
    links: [
      {url: "/summary", title: "Summary"}
    ],
    segments: []
  };
  
  menuAdmin: any = {
    title:"Admin",
    links: [
      {url: "/admin/summary", title:"Summary"}
    ],
    segments: [
      {
        title: "Data",
        links: [],
        segments: [
          {
            title: "Account Details",
            links: [
              {url: "/admin/tables/accounttypes", title:"Account Types"},
              {url: "/admin/tables/accounts", title:"Accounts"}
            ]
          },
          {
            title: "Transaction Details",
            links: [
              {url: "/admin/tables/categories", title:"Categories"},
              {url: "/admin/tables/subcategories", title:"Sub Categories"},
              {url: "/admin/tables/schedules", title:"Schedules"},
              {url: "/admin/tables/plannedtransactions", title:"Planned Transactions"}
            ]
          }
        ]
      }
    ]
  };

  
}
