import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
		path:':uuid/view',
		component: RecordViewComponent,
		resolve: {
			'record': RecordResolverService
		}
	},
  {
		path: 'search',
		component: SearchComponent
  },
  {
		path: 'search',
		component: SearchComponent
  },
  {
    path: 'profile',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [RouterModule, MarkdownModule]
})
export class AppRoutingModule { }
