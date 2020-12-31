import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://sceiba.cu/';
  cuorHost = 'https://orgs.sceiba.cu/';
  sceibaApi = 'https://sceiba.cu/api/';
  cuorApi = 'https://orgs.sceiba.cu/api/';

  appHost = 'https://192.168.1.100:4200';
  appName = 'Sceiba';
  oauthRedirectUri = 'https://192.168.1.100:4200/';
  oauthClientId = 'uLYRoa4mN5870eBby4bElHkrzpDUPFlWTios9njy';
  oauthScope = 'user:email';
  topOrganizationPID = '';
  cachableUrls = [];
}

export const environment = new EnvironmentImpl();

