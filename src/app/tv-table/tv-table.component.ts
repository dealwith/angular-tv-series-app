import { Component } from '@angular/core';
import { TV_SERIES } from './data';

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

export class TvTableComponent {
  constructor() {}

  displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];
  dataSource = TV_SERIES;
}
