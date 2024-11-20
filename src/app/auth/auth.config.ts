import { AuthConfig } from 'angular-oauth2-oidc';
import {environment} from '../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.auth_issuer,
  redirectUri: environment.auth_redicrect_uri,
  clientId: environment.auth_clientId,
  scope: environment.auth_scope,
  showDebugInformation: environment.auth_show_debug_information,
  strictDiscoveryDocumentValidation: false,
  responseType: 'code',
  tokenEndpoint: environment.auth_token_endpoint,
  revocationEndpoint: environment.auth_revocation_endpoint
};