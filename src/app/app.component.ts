import { Component, OnInit, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { AuthentikService } from './auth/authentik.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    
    authService = inject(AuthentikService);

    ngOnInit(): void {
        // setTimeout(() => {
        //     console.log(this.authService.getProfile());
        //     if(!this.authService.isLoggedIn()){
        //         console.log("currently logged-out");
        //         this.authService.login();
        //     }
        // }, 4000);
        console.log(this.authService.isLoggedIn());
    }

}
