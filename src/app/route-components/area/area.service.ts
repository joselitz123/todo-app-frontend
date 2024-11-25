import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, exhaustMap } from 'rxjs';
import {AreaTodoType} from '../../generic';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
    
    http = inject(HttpClient);

    loadTodoArea$ = new BehaviorSubject<void>(undefined);
    todoArea$ = this.loadTodoArea$.pipe(
        exhaustMap(() => this.http.get<AreaTodoType>(environment.backend_api_url + environment.backend_api.area.get))
    );

    addTodoArea(areaName: string) {
        const {backend_api: {area: {post}}, backend_api_url} = environment;
        return this.http.post(backend_api_url + post, {area_name: areaName } );
    }

    reloadTodoArea(){
        this.loadTodoArea$.next();
    }
}
