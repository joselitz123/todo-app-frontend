import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y'
import { AreaService } from './area.service';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [A11yModule],
  templateUrl: './area.component.html',
  styles: ``
})
export class AreaComponent implements OnInit, OnDestroy{

    showInputField = false;
    areaService = inject(AreaService);

    ngOnInit(): void{
    }

    ngOnDestroy(): void {
        
    }

    showFieldHandler(){
        this.showInputField = !this.showInputField;
        this.areaService.callBackend()
        .subscribe(x => console.log(x))
    }

}
