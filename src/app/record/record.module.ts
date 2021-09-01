
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { DialogCatalogSourceInfo, RecordViewComponent } from './record-view/record-view.component';
import { SourcerecordViewComponent } from './record-view/sourcerecord-view/sourcerecord-view.component';

@NgModule({
	declarations: [
		RecordViewComponent,
		DialogCatalogSourceInfo,
		SourcerecordViewComponent
	],

	entryComponents:[
		DialogCatalogSourceInfo
	],

	imports: [
		CommonModule,
		RecordRoutingModule
	]
})
export class RecordModule
{ }
