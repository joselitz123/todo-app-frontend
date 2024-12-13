import { Injectable, signal } from '@angular/core';
import { TodoItemsType } from '../../generic';


@Injectable({
  providedIn: 'root'
})
export class AreaIdStateService {

    private todosState = signal<TodoItemsType>({});
    private todoOrder = signal<number[]>([]);
    private _areaId = signal(0);

    set areaId(areaId: number){
        this._areaId.set(areaId);
    }

    get areaId(){
        return this._areaId();
    }

    addNewTodo(todoData: TodoItemsType[keyof TodoItemsType]){
        this.todosState.set({...this.todosState(), [-1]:todoData})
    }
}
