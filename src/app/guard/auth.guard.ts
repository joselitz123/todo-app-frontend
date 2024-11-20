import { inject } from '@angular/core'
import { CanActivateFn } from '@angular/router';
import { AuthentikService } from '../auth/authentik.service';

export const authGuard: CanActivateFn = async(route, state) => {
    const authService = inject(AuthentikService);
    const isLoggedIn= authService.isLoggedIn();
    if (!isLoggedIn) {
        await authService.login();
        return true
    }
    return true;
};
