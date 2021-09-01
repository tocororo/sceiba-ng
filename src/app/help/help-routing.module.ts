
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { HelpComponent } from './help/help.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';

const helpRoutes: Routes = [
	{
		path: '',
		component: HelpComponent,
		children: [
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
			  }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(helpRoutes),
		MarkdownModule.forRoot({ loader: HttpClient })
	],

	exports: [RouterModule, MarkdownModule]
})
export class HelpRoutingModule
{ }
