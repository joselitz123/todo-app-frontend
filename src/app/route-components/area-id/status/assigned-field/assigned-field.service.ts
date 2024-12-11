import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AreaUserAPIResponseType } from '../../../../generic';

@Injectable({
  providedIn: 'root'
})
export class AssignedFieldService {

    private http = inject(HttpClient);

    getUsersByArea(areaId: number){
        return this.http.get<AreaUserAPIResponseType>(environment.backend_api_url + environment.backend_api.area_user.get + `?area_id=${areaId}`);
    }
  
}
