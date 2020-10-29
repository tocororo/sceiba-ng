import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
		path: 'search',
		component: SearchComponent
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [RouterModule, MarkdownModule]
})
export class AppRoutingModule { }
