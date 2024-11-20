import {inject} from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    if(req.url.includes(environment.sts_server)) {
        return next(req);
    }
    const accessToken = inject(OAuthStorage).getItem('access_token') || '';
    const newReq = req.clone({
        headers: req.headers.append('Authorization', 'Bearer ' + accessToken)
    });
    return next(newReq);
};
