
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
		path: ':uuid/view',
		loadChildren: () => import('./record/record.module').then(mod => mod.RecordModule),
		// data: {
		// 	preload: true  /* In orden to use a custom preloading strategy (`SelectiveModulesPreload`). */
		// }
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
    canActivate: []
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then(mod => mod.HelpModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
