import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AreaUserAPIResponseType } from '../../../../generic';
import { rxResource } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssignedFieldService {

    private http = inject(HttpClient);
    private areaId = signal<number | null>(null);
    userList = rxResource({
        request: () => ({id: this.areaId()}),
        loader: ({request}) =>  this.http.get<AreaUserAPIResponseType>(environment.backend_api_url + environment.backend_api.area_user.get + `?area_id=${request.id}`)})

    getUsersByArea(areaId: number){
        return this.http.get<AreaUserAPIResponseType>(environment.backend_api_url + environment.backend_api.area_user.get + `?area_id=${areaId}`);
    }

    setAreaId(areaId: number){
        this.areaId.set(areaId);
    }
  
}
