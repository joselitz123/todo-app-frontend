import { Injectable, signal } from '@angular/core';
import { TodoItemsType } from '../../generic';


@Injectable({
  providedIn: 'root'
})
export class AreaIdStateService {

    private state = signal<TodoItemsType>([] as any);
    private _areaId = signal(0);

    set areaId(areaId: number){
        this._areaId.set(areaId);
    }

    get areaId(){
        return this._areaId();
    }
}
