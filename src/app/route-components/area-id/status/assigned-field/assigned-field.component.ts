import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, inject, signal } from '@angular/core';
import { AreaIdStateService } from '../../area-id-state.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AssignedFieldService } from './assigned-field.service';

@Component({
  selector: 'app-assigned-field',
  imports: [CdkOverlayOrigin, CdkConnectedOverlay ],
  templateUrl: './assigned-field.component.html',
  styles: ``
})
export class AssignedFieldComponent {

    private areaIdStateService = inject(AreaIdStateService);
    private assignedFieldService = inject(AssignedFieldService);

    protected isOptionOpen = signal<boolean>(true);
    protected users = toSignal(this.assignedFieldService.getUsersByArea(this.areaIdStateService.areaId), {initialValue: {success: false, data: []}});

    toggleOverlayHandler(){
        this.isOptionOpen.set(!this.isOptionOpen());
    }
}
