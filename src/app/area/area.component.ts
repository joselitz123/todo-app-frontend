import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y'
import { AreaService } from './area.service';

@Component({
    selector: 'app-area',
    imports: [A11yModule, ReactiveFormsModule],
    templateUrl: './area.component.html',
    styles: ``
})
export class AreaComponent implements OnInit, OnDestroy{

    area_name = new FormControl('');
    showInputField = false;
    areaService = inject(AreaService);

    ngOnInit(): void{
    }

    ngOnDestroy(): void {
        
    }

    addNewAreaInputFieldHandler(){
        this.showInputField = !this.showInputField;
        if(this.showInputField){
            this.areaService.callBackend()
            .subscribe(x => console.log(x));
        }
    }

}
