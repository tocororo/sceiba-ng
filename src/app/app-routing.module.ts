
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './home/home.component';
import { RecordResolverService } from './record-resolver.service';
import { RecordViewComponent } from './record-view/record-view.component';
import { SearchComponent } from './search/search.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':uuid/view',
    component: RecordViewComponent,  // TODO: poner esto en un módulo aparte y que use lazy loading (loadChildren).
    resolve: {
      record: RecordResolverService
    }
  },
  {
    path: 'search',
    component: SearchComponent  // TODO: poner esto en un módulo aparte y que use lazy loading (loadChildren).
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
    data: { src: 'assets/markdown/faq.', title: 'FAQ' }
  },
  {
    path: 'about',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/about.', title: 'Sobre Nosotros' }
  },
  {
    path: 'help',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/help.', title: 'Ayuda' }
  },
  {
    path: 'contact',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/contact.', title: 'Contacto' }
  },
  {
    path: 'policy',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/policy.', title: 'Política de Privacidad' }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [RouterModule, MarkdownModule]
})
export class AppRoutingModule { }
