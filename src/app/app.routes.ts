import { Routes } from '@angular/router';
import { AreaComponent} from './area/area.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path: '', component: AreaComponent, canActivate: [authGuard]}
];
    