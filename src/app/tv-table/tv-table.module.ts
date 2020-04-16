import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvTableComponent } from './tv-table.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [TvTableComponent, PaginationComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [TvTableComponent]
})
export class TvTableModule { }
