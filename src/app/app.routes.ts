import { Routes } from '@angular/router';
import { AreaComponent} from './route-components/area/area.component';
import { authGuard } from './guard/auth.guard';
import { AreaIdComponent } from './route-components/area-id/area-id.component';

export const routes: Routes = [
    {path: '', component: AreaComponent, canActivate: [authGuard]},
    {path: 'area/:areaId', component: AreaIdComponent, canActivate: [authGuard]}
];
    