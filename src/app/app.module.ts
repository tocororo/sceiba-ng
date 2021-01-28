
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RecaptchaModule } from 'ng-recaptcha';

import { AngularMaterialModule, CoreModule, StaticsModule, TocoFormsModule, 
  SearchModule, SearchService, Environment, OrganizationServiceNoAuth } from 'toco-lib';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AggregationsComponent } from './aggregations/aggregations.component';
import { AppComponent } from './app.component';
import { BarVerticalComponent } from './charts/bar-vertical/bar-vertical.component';
import { ChartsComponent } from './charts/charts.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { PieGridComponent } from './charts/pie-grid/pie-grid.component';
import { PolarChartComponent } from './charts/polar-chart/polar-chart.component';
import { ContactComponent } from './contact/contact.component';
import { SceibaFooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecordViewComponent } from './record-view/record-view.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchComponent } from './search/search.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { StaticChipsLinkComponent } from './statics/chips-link/chips-static-link.component';
import { LinkStaticComponent } from './statics/link/link-static.component';
import { StaticTableLinkComponent } from './statics/table-link/table-static-link.component';
import { InputFileAvatarComponent } from './user/input-file-avatar/input-file-avatar.component';
import { InputOrgSearchComponent } from './user/input-org-search/input-org-search.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

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
    StaticChipsLinkComponent,
    ContactComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    InputOrgSearchComponent,
    InputFileAvatarComponent,
    SceibaFooterComponent
  ],
  entryComponents:[
    InputOrgSearchComponent,
    InputFileAvatarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
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
  ],
  providers: [
    SearchService,
    OrganizationServiceNoAuth,
    { provide: Environment, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
