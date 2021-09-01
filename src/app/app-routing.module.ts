
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

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
		// data: {
		// 	preload: true  /* In orden to use a custom preloading strategy (`SelectiveModulesPreload`). */
		// }
  },
  {
    path: 'profile',  // TODO: poner esto en un módulo aparte y que use lazy loading (loadChildren).
    children: [
      {
        path: '',
        component: UserProfileComponent
      },
      {
        path: 'edit',
        component: UserProfileEditComponent
      }
    ],
    canActivate: []
  },

  // TODO: poner los StaticPages en un módulo aparte y que use lazy loading (loadChildren).
  {
    path: 'faq',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/faq.md', title: 'FAQ' }
  },
  {
    path: 'about',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/about.md', title: 'Sobre Nosotros' }
  },
  {
    path: 'help',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/help.md', title: 'Ayuda' }
  },
  {
    path: 'contact',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/contact.md', title: 'Contacto' }
  },
  {
    path: 'policy',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/policy.md', title: 'Política de Privacidad' }
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
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [RouterModule, MarkdownModule]
})
export class AppRoutingModule { }
