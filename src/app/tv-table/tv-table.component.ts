import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { TV_SERIES } from './data';

export interface PeriodicElement {
  name: string;
  genres: string[];
  season: number;
  network: string[];
  premiere: string;
}

@Component({
  selector: 'app-tv-table',
  templateUrl: './tv-table.component.html',
  styleUrls: ['./tv-table.component.css'],
})
export class TvTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];

  constructor() {
    this.dataSource = new MatTableDataSource<any>(TV_SERIES);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
