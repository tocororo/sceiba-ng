import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://10.2.83.224:5000/';
  cuorHost = 'https://orgs.sceiba.cu/';
  sceibaApi = 'https://10.2.83.224:5000/api/';
  cuorApi = 'https://orgs.sceiba.cu/api/';

  appHost = 'https://localhsot:4200';
  appName = 'Sceiba';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://localhsot:4200/';
  oauthClientId = 'bh9bv1TXPH7HO8ulSgVUs8rBknmEn5xlH6kDdKqH';
  oauthScope = 'user:email';
  topOrganizationPID = '';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;

}

export const environment = new EnvironmentImpl();

