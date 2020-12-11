import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DatatableViewComponent } from '../datatable-view/datatable-view.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, FormsModule, DataTablesModule],
  declarations: [HomeComponent, DatatableViewComponent],
  providers: [],
})
export class HomeModule {}
