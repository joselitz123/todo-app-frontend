import { Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y'
import { AreaService } from './area.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-area',
    imports: [A11yModule, ReactiveFormsModule, NgClass, AsyncPipe, RouterLink],
    templateUrl: './area.component.html',
    styles: ``
})
export class AreaComponent implements OnDestroy{

    area_name = new FormControl('', Validators.required);
    showInputField = signal(false);
    areaService = inject(AreaService);
    todoArea$ = this.areaService.todoArea$;
    addTodoArea$ = new Subscription;

    ngOnDestroy(): void {
        this.addTodoArea$.unsubscribe();
    }
    
    showAreaInputFieldHandler(){
        this.showInputField.set(!this.showInputField()) ;
    }

    resetAreaField(){
        this.showInputField.set(false);
        this.area_name.reset();
    }
    
    addNewAreaInputFieldHandler(){
        if (!this.area_name.errors) {
            this.addTodoArea$ = this.areaService.addTodoArea(this.area_name.value  || '')
            .subscribe({complete: () => {
                this.areaService.reloadTodoArea();
                this.resetAreaField();
            }});
        }
    }



}
