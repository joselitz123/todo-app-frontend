import { Component, inject, Input } from '@angular/core';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import {AuthentikService} from '../auth/authentik.service';

@Component({
    selector: 'app-header',
    imports: [AsyncPipe, TitleCasePipe, ],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    authService = inject(AuthentikService);
    profile$ = this.authService.profile.asObservable();
    areaId$ = '';

    @Input()
    set id(areaId: string){
    }

    logoutHandler(){
        this.authService.logout();
    }
}
