import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule, CoreModule, EnvServiceProvider, SearchModule, SearchService } from 'toco-lib';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { MatRadioModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { PolarChartComponent } from './charts/polar-chart/polar-chart.component';
import { BarVerticalComponent } from './charts/bar-vertical/bar-vertical.component';
import { PieGridComponent } from './charts/pie-grid/pie-grid.component';
import { AggregationsComponent } from './aggregations/aggregations.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    StaticPagesComponent,
    HomeComponent,
 
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
    HttpClientModule,
		// MarkdownModule.forRoot({
		// 	loader: HttpClient
    //   }),
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
