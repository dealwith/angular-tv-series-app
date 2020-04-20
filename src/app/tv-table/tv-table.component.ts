import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';

import { TV_SERIES } from './data';
import { TVSeriesModel } from '../_interface/tv-series.model';
import { uniqueBy } from '../core/utils';

@Component({
  selector: 'app-tv-table',
  templateUrl: './tv-table.component.html',
  styleUrls: ['./tv-table.component.css'],
})
export class TvTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<TVSeriesModel>;
  displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];
  genres: string[] = [];
  premieres: string[] = [];

  constructor() {
    this.dataSource = new MatTableDataSource<TVSeriesModel>(TV_SERIES);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.allGenres();
    this.allPremieres();
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  allGenres(): void {
    const uniqueGenres = [
      ...new Set(
        TV_SERIES.map((object) => object.genres).reduce((acc, val) =>
          acc.concat(val)
        )
      ),
    ];
    this.genres = uniqueGenres;
  }

  allPremieres(): void {
    // @ts-ignore
    //the error in TV_SERIES
    const uniqueYears = uniqueBy('preimere', TV_SERIES).map(
      (uniqueObjects) => uniqueObjects.premiere
    );
    return uniqueYears;
  }

  redirectToDetails = (id: string) => {};
}
