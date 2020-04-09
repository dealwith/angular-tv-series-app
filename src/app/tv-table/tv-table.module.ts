import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvTableComponent } from './tv-table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TvTableComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [TvTableComponent]
})
export class TvTableModule { }
