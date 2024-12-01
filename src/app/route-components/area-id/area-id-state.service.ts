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
  constructor() { }
}
