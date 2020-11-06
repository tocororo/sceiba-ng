import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule, CoreModule, EnvServiceProvider, SearchModule, SearchService, StaticsModule } from 'toco-lib';

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
import { RecordViewComponent } from './record-view/record-view.component';
import { LinkStaticComponent } from './statics/link/link-static.component';
import { StaticTableLinkComponent } from './statics/table-link/table-static-link.component';
import { StaticChipsLinkComponent } from './statics/chips-link/chips-static-link.component';

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
		RecordViewComponent,
    LinkStaticComponent,
    StaticTableLinkComponent,
    StaticChipsLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchModule,
    AngularMaterialModule,
    FlexLayoutModule,
    StaticsModule,

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
