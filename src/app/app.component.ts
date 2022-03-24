import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, JwksValidationHandler, OAuthErrorEvent, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
//import { RecaptchaLoaderService } from 'ng-recaptcha';
//import { RecaptchaDynamicLanguageLoaderService } from 'ng-recaptcha-dynamic-language';

import { convertLangFromNumberToString, LanguageAbbrs, LanguageTexts, LANGUAGE_ABBRS_LIST, LANGUAGE_TEXTS_LIST,
  Environment, Response, User, UserProfileService } from 'toco-lib';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider. 
  issuer: 'https://personas.sceiba.cu/auth/realms/sceiba',

  loginUrl: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/auth',

  tokenEndpoint: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/token',

  logoutUrl: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/logout',

  oidc: true,

  requireHttps: true,

  userinfoEndpoint: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/userinfo',

  // URL of the SPA to redirect the user to after login. 
  redirectUri: 'https://localhost:4200',

  // The SPA's id. The SPA is registered with this id at the auth-server. 
  clientId: 'sceiba-angular-dev',

  // Sets the scope for the permissions the client should request. 
  // The first three are defined by OIDC. The 4th is a usecase-specific one. 
  scope: 'openid profile email',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  /**
   * Returns the available language texts. 
   */
  public languageTexts: LanguageTexts[];
  /**
   * Returns the available language abbreviations. 
   */
  public languageAbbrs: LanguageAbbrs[];
  /**
   * Returns the language currently used as number. 
   * The Spanish language is: 0. It is the default. 
   * The English language is: 1. 
   */
  public currentLang: number;

  public footerSites: Array<{ name: string, url: string, useRouterLink: boolean }>;

  public footerInformation: Array<{ name: string, url: string, useRouterLink: boolean }>;

  public urlLogin: string;

  public sceibaHost: string;

  public user: User;

  public urlSignUp: string = 'https://personas.sceiba.cu/auth/realms/sceiba/clients-registrations/openid-connect/sceiba-angular-dev';

  public constructor(private env: Environment,
    // private matomoInjector: MatomoInjector,
    private router: Router,
    private oauthService: OAuthService,
    private oauthStorage: OAuthStorage,
    private userService: UserProfileService,
    protected http: HttpClient,
    private _transServ: TranslateService, 
    //private _recaptchaDynamicLanguageLoaderServ: RecaptchaLoaderService,
    /*@Inject(RecaptchaLoaderService) private _recaptchaDynamicLanguageLoaderServ: RecaptchaDynamicLanguageLoaderService*/)
  {
    this.configure()
    // this.matomoInjector.init('https://crai-stats.upr.edu.cu/', 6);
  }

  public ngOnInit(): void
  {
		this.languageTexts = LANGUAGE_TEXTS_LIST;
		this.languageAbbrs = LANGUAGE_ABBRS_LIST;
		this.currentLang = 0;  /* The default language is Spanish; that is, the zero index. */
		this._transServ.setDefaultLang(LanguageAbbrs.es);
		this._transServ.use(LanguageAbbrs.es);
		this._transServ.addLangs(this.languageAbbrs);
		//this._recaptchaDynamicLanguageLoaderServ.updateLanguage(LanguageAbbrs.es);

    this.sceibaHost = this.env.sceibaHost;

    this.footerSites = Array();
    this.footerInformation = Array();

    this.footerSites.push({ name: "MES", url: "https://www.mes.gob.cu", useRouterLink: false});
    this.footerSites.push({ name: "ONEI", url: "http://www.onei.gob.cu/", useRouterLink:false});
    this.footerSites.push({ name: "GRID", url: "https://www.grid.ac", useRouterLink: false});
    
    this.footerInformation.push({ name: "ROR", url: "https://ror.org/", useRouterLink: false});
    this.footerInformation.push({ name: "Wikidata", url: "https://www.wikidata.org/wiki/Wikidata:Main_Page", useRouterLink: false});
    this.footerInformation.push({ name: "ORCID", url: "https://orcid.org", useRouterLink: false });

    /* this.urlLogin = this.env.sceibaHost + "login";
    this.urlSignUp = this.env.sceibaHost + "signup"; */

    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.error(event);
      } else {
        console.warn("EVENT:", event);
        if (event.type == 'token_received') {
          this.getUserInfo().subscribe({
            next: (response) => {
              console.log(response)
            },

            error: (e) => { },

            complete: () => { },
          });
        }
      }
    });
    if (this.oauthService.getAccessToken()) {
      this.getUserInfo().subscribe({
        next: (response) => {
          console.log(response)
        },

        error: (e) => { },

        complete: () => { },
      });
    }
  }

  /**
   * Sets the current language. 
   * @param index Zero-based index that indicates the current language. 
   */
  public setLanguage(index: number): void
  {
    if (index != this.currentLang)
    {
      // console.log('setLanguage method is called with language: ', index);

      let currentLangAsString: string = convertLangFromNumberToString((this.currentLang = index));

      /* Informs the new current language. */
      this._transServ.use(currentLangAsString);
      // this._recaptchaDynamicLanguageLoaderServ.updateLanguage(currentLangAsString);
    }
  }

  public get isHome() {
    return this.router.url == '/';
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    console.log('hi');

    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name()
  {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  getUserInfo(): Observable<Response<any>> {
    // let token = this.oauthStorage.getItem('access_token');
    // let headers = new HttpHeaders()
    // headers.set('Authorization', 'Bearer ' + token);
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin', '*');
    // const options = {
    //   headers: headers
    // };
    return this.http.get<Response<any>>(this.env.sceibaApi + 'me');
  }

  public me()
  {
    this.getUserInfo().subscribe({
      next: (response) => {
        console.log(response)
      },

      error: (e) => { },

      complete: () => { },
    });
  }

  // /**
  //  * hasPermission return true if the user have permission
  //  */
  // public get hasPermission(): boolean {
  //   let permission = new Permission();

  //   if (permission.hasPermissions("curator") || permission.hasPermissions("admin")){
  //     return true;
  //   }
  //   return false;
  // }

  // /**
  //  * hasPermission return true if the user have permission
  //  */
  // public get hasPermissionAdmin(): boolean {
  //   let permission = new Permission();

  //   if (permission.hasPermissions("admin")){
  //     return true;
  //   }
  //   return false;
  // }
}
