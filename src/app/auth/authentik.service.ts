import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

type Profile = {
    email: string;
    given_name: string;
    name: string;
    nickname: string;
    preferred_username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentikService {
    private oAuthService = inject(OAuthService);
    private oAuthStorage = inject(OAuthStorage);
    profile = new BehaviorSubject<Profile | null>(null);

    constructor() {
        this.initConfiguration();
     }

    initConfiguration() {
        this.oAuthService.configure(authConfig);
        this.oAuthService.setupAutomaticSilentRefresh();
        if (this.oAuthService.hasValidAccessToken() && this.oAuthService.hasValidIdToken()) {
            this.profile.next(this.oAuthService.getIdentityClaims() as Profile)
        }
    }

    login(){
        console.log("login initiated");
        return new Promise((resolve, reject) => {
            this.oAuthService.loadDiscoveryDocumentAndLogin({
                onTokenReceived: (receivedToken) => {
                    this.oAuthStorage.setItem('access_token', receivedToken.accessToken);
                },
                onLoginError: (params) => {
                    console.log('auth failed');
                    reject(params);
                },
            })
            .then(hasReceivedToken => {
                if(hasReceivedToken) {
                    this.profile.next(this.oAuthService.getIdentityClaims() as Profile);
                    resolve(true)
                }
            });
        })
    }

    logout() {
        this.oAuthService.revokeTokenAndLogout(false, true);
        this.oAuthService.logOut();
        this.profile.next(null);
    } 

    getProfile() {
        return this.profile.asObservable();
    }

    isLoggedIn() {
        return this.oAuthService.hasValidIdToken();
    }

    getAccessToken() {
        return this.oAuthService.authorizationHeader();
    }
}
