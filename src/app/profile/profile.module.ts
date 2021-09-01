
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { InputFileAvatarComponent } from './user/input-file-avatar/input-file-avatar.component';
import { InputOrgSearchComponent } from './user/input-org-search/input-org-search.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';

@NgModule({
	declarations: [
		InputFileAvatarComponent,
		InputOrgSearchComponent,
		UserProfileComponent,
		UserProfileEditComponent
	],

	entryComponents:[
		InputFileAvatarComponent,
		InputOrgSearchComponent
	],

	imports: [
		CommonModule,
		ProfileRoutingModule
	]
})
export class ProfileModule
{ }
