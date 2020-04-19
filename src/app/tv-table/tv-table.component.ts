import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

import { compare } from '../core/utils';
import { TV_SERIES } from './data';
import { TVSeriesModel } from '../_interface/tv-series.model'

@Component({
  selector: 'app-tv-table',
  templateUrl: './tv-table.component.html',
  styleUrls: ['./tv-table.component.css'],
})
export class TvTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];
  sortedData: TVSeriesModel[];

  constructor() {
    this.dataSource = new MatTableDataSource<TVSeriesModel>(TV_SERIES);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  sortData(sort: Sort) {
    const data = TV_SERIES.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
  }

  redirectToDetails = (id: string) => {};
}
