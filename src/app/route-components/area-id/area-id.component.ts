import { Component, inject } from '@angular/core';
import { AreaIdService } from './area-id.service';
import { AsyncPipe } from '@angular/common';
import { StatusComponent } from './status/status.component';

@Component({
  selector: 'app-area-id',
  imports: [AsyncPipe, StatusComponent],
  templateUrl: './area-id.component.html',
  styles: ``
})
export class AreaIdComponent {

    areaIdService = inject(AreaIdService);
    status$ = this.areaIdService.status$;
    
    constructor(){

    }

}
