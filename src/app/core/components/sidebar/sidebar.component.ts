import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public items: any[];

  constructor() {
    this.items = [
        {
            label: 'Users',
            icon:'pi pi-fw pi-user',
            expanded: true,
            items: [
                {
                    label: 'List',
                    icon:'pi pi-fw pi-user-plus',
                    routerLink: ['/users/list']
                }
            ]
        }
    ];
  }

  ngOnInit(): void {
  }

}
