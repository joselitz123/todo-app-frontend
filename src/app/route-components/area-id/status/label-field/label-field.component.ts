import { Component, computed, inject, signal } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LabelFieldService } from './label-field.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AreaIdStateService } from '../../area-id-state.service';
import randomColor from 'randomcolor';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-label-field',
  imports: [CdkOverlayOrigin, CdkConnectedOverlay, A11yModule, ReactiveFormsModule, NgStyle],
  templateUrl: './label-field.component.html',
  styles: `
  `,
})
export class LabelFieldComponent{

    private labelFieldService = inject(LabelFieldService);
    private areaIdState = inject(AreaIdStateService);

    protected isOptionOpen = signal<boolean>(true);
    protected showAddLabelField = signal<boolean>(false);
    
    private initialLabelList = toSignal(this.labelFieldService.getAreaLabels(this.areaIdState.areaId), {initialValue: {data: [], success: false}}); 
    protected labelList = computed(() => signal(this.initialLabelList()));

    labelField = new FormControl('');

    toggleOverlayHandler(){
        this.isOptionOpen.set(!this.isOptionOpen());
    }

    toggleAddLabelHandler(){
        this.showAddLabelField.set(!this.showAddLabelField());
        if (this.labelField.value && this.labelField.value.length > 0) {
            this.insertLabelHandler(); //    Add input handler here
            this.toggleOverlayHandler();
            this.labelField.reset();
        }
    }

    insertLabelHandler(){
        this.labelFieldService.insertLabel(this.labelField.value || '', randomColor({luminosity: 'dark'}), this.areaIdState.areaId)
        .subscribe(data => this.labelList().update(() => data));
    }

}
