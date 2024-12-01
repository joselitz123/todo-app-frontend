import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { authInterceptor } from './interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(),provideOAuthClient(),provideRouter(routes, withComponentInputBinding()), provideHttpClient(withFetch()
    ,withInterceptors([authInterceptor])
    )]
};
