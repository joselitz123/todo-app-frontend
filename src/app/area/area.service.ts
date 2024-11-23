import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AreaService {

    http = inject(HttpClient);

    addTodoArea(areaName: string) {
        const {backend_api: {todo_area: {add}}, backend_api_url} = environment;
        return this.http.post(backend_api_url + add, areaName );
    }

    callBackend(){
        return this.http.get('http://localhost:3001/');
    }
}
