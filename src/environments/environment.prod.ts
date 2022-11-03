import { Environment } from 'toco-lib';

export class EnvironmentImpl implements Environment {
  production = true;
  sceibaHost = 'https://cuba-iroko.sceiba.org/';
  cuorHost = 'https://cuba-iroko.sceiba.org/';
  sceibaApi = 'https://cuba-iroko.sceiba.org/api/';
  cuorApi = 'https://cuba-iroko.sceiba.org/api/';

  appHost = 'https://cuba.sceiba.org';
  appName = 'Sceiba';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://cuba.sceiba.org/';
  oauthClientId = 'xnI7cQp9FfKutLutBILvlNrsyB4iRF2R81LVTRLY';
  oauthScope = 'user:email';
  topOrganizationPID = '';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;
}

export const environment = new EnvironmentImpl();

export const allowedURLS = ['https://sceiba.cu/api/'];
