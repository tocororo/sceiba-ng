import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://cuba-iroko.sceiba.org/';
  cuorHost = 'https://cuba-iroko.sceiba.org/';
  sceibaApi = 'https://cuba-iroko.sceiba.org/api/';
  cuorApi = 'https://cuba-iroko.sceiba.org/api/';

  appHost = 'https://localhost:4200';
  appName = 'Organizaciones - Sceiba';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://localhost:4200/';
  oauthClientId = '035fMpN08wTdlDXEKhj8RRWF6bVH4HARWBkGLuWq';
  oauthScope = 'user:email';
  topOrganizationPID = 'orgaid.223';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;

  sceiba = 'https://cuba.sceiba.org';
  discover = '/search';
  catalog = 'https://cuba-catalogo.sceiba.org/';
  revistasmes = 'https://cuba-revistasmes.sceiba.org/';
  organizations = 'https://cuba-organizaciones.sceiba.org/';
  persons = 'https://cuba-personas.sceiba.org/';
  vocabularies = 'https://vocabularios.sceiba.cu/';
  moodle = 'https://courses.sceiba.org/';
  evaluations = 'https://evaluaciones.sceiba.org/';


  oauthInfo = {
    serverHost: this.sceibaHost,
    loginUrl: this.sceibaHost + 'oauth/internal/authorize',
    tokenEndpoint: this.sceibaHost + 'oauth/token',
    userInfoEndpoint: this.sceibaApi + 'me',
    appHost: this.appHost,
    appName: this.appName,
    oauthRedirectUri: this.oauthRedirectUri,
    oauthClientId: this.oauthClientId,
    oauthScope: this.oauthScope,
  }

}

export const environment = new EnvironmentImpl();

export const allowedURLS = [environment.sceibaApi];
