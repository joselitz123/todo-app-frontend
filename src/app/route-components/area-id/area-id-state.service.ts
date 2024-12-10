import { Injectable, signal } from '@angular/core';

interface Todo {
    id: number;
    name: string;
    priority: string;
    label?: number[];
    external_reference?: string;
    assigned?: number[];
    description?: string;
    checklist: [];
    sub_tasks?: Todo[];
}[]

@Injectable({
  providedIn: 'root'
})
export class AreaIdStateService {

    private state = signal<Todo>([] as any);
    private _areaId = signal(0);

    set areaId(areaId: number){
        this._areaId.set(areaId);
    }

    get areaId(){
        return this._areaId();
    }
}
