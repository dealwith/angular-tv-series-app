import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvTableModule } from './tv-table/tv-table.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TvTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
