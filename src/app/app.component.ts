import { Component } from '@angular/core';
import { EnvService } from 'toco-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public footerSites: Array< { name: string, url: string, useRouterLink: boolean } >;

  public footerInformation: Array< { name: string, url: string, useRouterLink: boolean } >;

  public urlLogin: string;

  public urlSignUp: string;

  public constructor(private env: EnvService)
  { }

    public ngOnInit(): void
    {
        this.footerSites =  Array();
        this.footerInformation =  Array();

        this.footerSites.push({ name: "MES", url: "https://www.mes.gob.cu", useRouterLink: false});
        this.footerSites.push({ name: "ONEI", url: "http://www.onei.gob.cu/", useRouterLink:false});
        this.footerSites.push({ name: "GRID", url: "https://www.grid.ac", useRouterLink: false});
        this.footerSites.push({ name: "ROR", url: "https://ror.org/", useRouterLink: false});
        this.footerSites.push({ name: "Wikidata", url: "https://www.wikidata.org/wiki/Wikidata:Main_Page", useRouterLink: false});

        this.footerInformation.push({ name: "Términos de uso", url: "/policy", useRouterLink: true});
        this.footerInformation.push({ name: "Privacidad", url: "/policy", useRouterLink: true});
        // this.footerInformation.push({ name: "Privacidad", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});
        this.footerInformation.push({ name: "Contacto", url: "/contact", useRouterLink: true});
        this.footerInformation.push({ name: "FAQs", url: "/faq", useRouterLink: true});

        this.urlLogin = this.env.sceibaHost + "login";
        this.urlSignUp = this.env.sceibaHost + "signup";
    }
}
