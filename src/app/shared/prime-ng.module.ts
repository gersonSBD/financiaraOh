import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    SidebarModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    PanelModule,
    CardModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    PanelModule,
    CardModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule { }
