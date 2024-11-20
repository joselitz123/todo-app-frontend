import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AreaService {

    http = inject(HttpClient);

    callBackend(){
        return this.http.get('http://localhost:3001/');
    }
}
