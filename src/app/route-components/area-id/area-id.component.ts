import { Component, inject, Input, signal } from '@angular/core';
import { AreaIdService } from './area-id.service';
import { AsyncPipe } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { AreaIdStateService } from './area-id-state.service';

@Component({
  selector: 'app-area-id',
  imports: [AsyncPipe, StatusComponent],
  templateUrl: './area-id.component.html',
  styles: ``
})
export class AreaIdComponent {

    areaIdService = inject(AreaIdService);
    areaIdState = inject(AreaIdStateService);
    status$ = this.areaIdService.status$;
    
    constructor(){

    }

    @Input()
    set areaId(areaId: string){
        this.areaIdState.areaId = parseInt(areaId);
    }

}
