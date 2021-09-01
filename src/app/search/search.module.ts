
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
	declarations: [
		SearchComponent,
		SearchListComponent
	],

	imports: [
		CommonModule,
		SearchRoutingModule
	]
})
export class SearchModule
{ }
