import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { StatusType } from '../../generic';

@Injectable({
  providedIn: 'root'
})
export class AreaIdService {

    http = inject(HttpClient);

    status$ = this.http.get<StatusType>(environment.backend_api_url + environment.backend_api.status.get);

}
