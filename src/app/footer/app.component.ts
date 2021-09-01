
import { Component } from '@angular/core';
import { Environment } from 'toco-lib';
import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {

//   public footerSites: Array< { name: string, url: string, useRouterLink: boolean } >;

//   public footerInformation: Array< { name: string, url: string, useRouterLink: boolean } >;

//   public urlLogin: string;

//   public urlSignUp: string;

//   public constructor(private env: Environment, private router: Router)
//   { }

//   public ngOnInit(): void
//   {
//       this.footerSites =  Array();
//       this.footerInformation =  Array();

//       // this.footerSites.push({ name: "MES", url: "https://www.mes.gob.cu", useRouterLink: false});
//       // this.footerSites.push({ name: "ONEI", url: "http://www.onei.gob.cu/", useRouterLink:false});
//       // this.footerSites.push({ name: "GRID", url: "https://www.grid.ac", useRouterLink: false});
//       // this.footerSites.push({ name: "ROR", url: "https://ror.org/", useRouterLink: false});
//       // this.footerSites.push({ name: "Wikidata", url: "https://www.wikidata.org/wiki/Wikidata:Main_Page", useRouterLink: false});

//       this.footerInformation.push({ name: "ACERCA_DE", url: "/help/about", useRouterLink: true});
//       this.footerInformation.push({ name: "PRIVACIDAD", url: "/help/policy", useRouterLink: true});
//       // this.footerInformation.push({ name: "PRIVACIDAD", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});
//       this.footerInformation.push({ name: "CONTACTOS", url: "/help/contact", useRouterLink: true});

//       this.urlLogin = this.env.sceibaHost + "login";
//       this.urlSignUp = this.env.sceibaHost + "signup";
//   }

//   public get isHome(){
//     return this.router.url == '/';
//   }
// }
