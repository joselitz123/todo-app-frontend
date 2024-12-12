import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AreaIdStateService } from '../../../area-id-state.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AssignedFieldService } from './assigned-field.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { AreaUserType } from '../../../../../generic';

@Component({
  selector: 'app-assigned-field',
  imports: [CdkOverlayOrigin, CdkConnectedOverlay ],
  templateUrl: './assigned-field.component.html',
  styles: ``
})
export class AssignedFieldComponent implements OnInit {

    private areaIdStateService = inject(AreaIdStateService);
    private assignedFieldService = inject(AssignedFieldService);

    protected selectedUsers = signal<number[]>([]);

    protected isOptionOpen = signal<boolean>(true);
    protected userList = this.assignedFieldService.userList;


    ngOnInit(): void {
        this.assignedFieldService.setAreaId(this.areaIdStateService.areaId);
    }

    protected toggleOverlayHandler(){
        this.isOptionOpen.set(!this.isOptionOpen());
    }

    protected selectUserHandler(id: number){
        
    }
}
