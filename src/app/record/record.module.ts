
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { DialogCatalogSourceInfo, RecordViewComponent } from './record-view/record-view.component';
import { SourcerecordViewComponent } from './record-view/sourcerecord-view/sourcerecord-view.component';
import { AngularMaterialModule, CoreModule, StaticsModule } from 'toco-lib';
import { StaticChipsLinkComponent } from './statics/chips-link/chips-static-link.component';
import { LinkStaticComponent } from './statics/link/link-static.component';
import { StaticTableLinkComponent } from './statics/table-link/table-static-link.component';

@NgModule({
	declarations: [
		RecordViewComponent,
		DialogCatalogSourceInfo,
		SourcerecordViewComponent,

    LinkStaticComponent,
    StaticTableLinkComponent,
    StaticChipsLinkComponent,
	],

	imports: [
		CommonModule,
		RecordRoutingModule,
    AngularMaterialModule,
    CoreModule,

    StaticsModule,
	]
})
export class RecordModule
{ }
