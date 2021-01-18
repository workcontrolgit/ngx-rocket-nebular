import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { DataTablesModule } from 'angular-datatables';
import { DatatableViewComponent } from '../datatable-view/datatable-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, FormsModule, DataTablesModule],
  declarations: [AboutComponent, DatatableViewComponent],
})
export class AboutModule {}
