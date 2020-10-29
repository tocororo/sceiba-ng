import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule, CoreModule, EnvServiceProvider, SearchModule, SearchService } from 'toco-lib';

import { StaticPagesComponent } from './static-pages/static-pages.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { PolarChartComponent } from './charts/polar-chart/polar-chart.component';
import { BarVerticalComponent } from './charts/bar-vertical/bar-vertical.component';
import { PieGridComponent } from './charts/pie-grid/pie-grid.component';
import { AggregationsComponent } from './aggregations/aggregations.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticPagesComponent,
    HomeComponent,
    SearchComponent,
    SearchListComponent,
 
    ChartsComponent,
		PolarChartComponent,
		BarVerticalComponent,
		PieGridComponent,
		AggregationsComponent,
		GaugeChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchModule,
    AngularMaterialModule,
    FlexLayoutModule,

    MatRadioModule,
    NgxChartsModule,
    CoreModule,
  ],
  providers: [
    SearchService,
		EnvServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
