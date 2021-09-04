import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://sceiba.cu/';
  cuorHost = 'https://organizaciones.sceiba.cu/';
  sceibaApi = 'https://sceiba.cu/api/';
  cuorApi = 'https://organizaciones.sceiba.cu:5000/api/';

  appHost = 'https://localhost:4200';
  appName = 'Sceiba';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://localhost:4200/';
  oauthClientId = 'uLYRoa4mN5870eBby4bElHkrzpDUPFlWTios9njy';
  oauthScope = 'user:email';
  topOrganizationPID = '';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;


}

export const environment = new EnvironmentImpl();

export const allowedURLS = [environment.sceibaApi];
