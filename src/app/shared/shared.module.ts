import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
