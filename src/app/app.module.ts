
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { RecaptchaModule/*, RecaptchaLoaderService*/ } from 'ng-recaptcha';
//import { RecaptchaDynamicLanguageLoaderService } from 'ng-recaptcha-dynamic-language';
import { MarkdownModule } from 'ngx-markdown';
import { MatomoModule } from 'ngx-matomo';
import {
  AngularMaterialModule, CoreModule,
  Environment, OrganizationServiceNoAuth, SearchModule, SearchService, SourceServiceNoAuth, StaticsModule, TocoFormsModule
} from 'toco-lib';
import { allowedURLS, environment } from 'src/environments/environment';
import { AggregationsComponent } from './aggregations/aggregations.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarVerticalComponent } from './charts/bar-vertical/bar-vertical.component';
import { ChartsComponent } from './charts/charts.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { PieGridComponent } from './charts/pie-grid/pie-grid.component';
import { PolarChartComponent } from './charts/polar-chart/polar-chart.component';
import { ContactComponent } from './contact/contact.component';
import { SceibaFooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { StaticChipsLinkComponent } from './statics/chips-link/chips-static-link.component';
import { LinkStaticComponent } from './statics/link/link-static.component';
import { StaticTableLinkComponent } from './statics/table-link/table-static-link.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function storageFactory(): OAuthStorage {
  return sessionStorage
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StaticPagesComponent,
    HomeComponent,

    ChartsComponent,
		PolarChartComponent,
		BarVerticalComponent,
		PieGridComponent,
		AggregationsComponent,
		GaugeChartComponent,
    LinkStaticComponent,
    StaticTableLinkComponent,
    StaticChipsLinkComponent,
    ContactComponent,
    SceibaFooterComponent
  ],
  entryComponents:[
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    MatRadioModule,
    FlexLayoutModule,
    NgxChartsModule,
    RecaptchaModule,

    AngularMaterialModule,
    CoreModule,
    StaticsModule,
    TocoFormsModule,
    SearchModule,

    AppRoutingModule,
    MarkdownModule.forRoot({
      loader: HttpClient
      }),
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: allowedURLS,
          sendAccessToken: true
      }
  }),
    MatomoModule

  ],
  providers: [
    SearchService,
    OrganizationServiceNoAuth,
    SourceServiceNoAuth,
    { provide: Environment, useValue: environment },
    { provide: OAuthStorage, useFactory: storageFactory },
    // {
    //   provide: RecaptchaLoaderService,
    //   useClass: RecaptchaDynamicLanguageLoaderService,
    // },
    //RecaptchaDynamicLanguageLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
