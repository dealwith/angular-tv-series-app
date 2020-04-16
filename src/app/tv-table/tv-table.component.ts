import { Component, OnInit, ViewChild } from '@angular/core';
import { TV_SERIES } from './data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-tv-table',
  templateUrl: './tv-table.component.html',
  styleUrls: ['./tv-table.component.css'],
})
export class TvTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>(TV_SERIES);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];
}
