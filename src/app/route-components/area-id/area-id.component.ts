import { Component, inject } from '@angular/core';
import { AreaIdService } from './area-id.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-area-id',
  imports: [AsyncPipe],
  templateUrl: './area-id.component.html',
  styles: ``
})
export class AreaIdComponent {

    areaIdService = inject(AreaIdService);
    status$ = this.areaIdService.status$;

}
