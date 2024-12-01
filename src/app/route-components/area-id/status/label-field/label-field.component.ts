import { Component, inject, OnInit, signal } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-field',
  imports: [CdkOverlayOrigin, CdkConnectedOverlay, A11yModule, ReactiveFormsModule],
  templateUrl: './label-field.component.html',
  styles: `
  `,
})
export class LabelFieldComponent implements OnInit {

    protected isOptionOpen = signal<boolean>(true);
    protected showAddLabelField = signal<boolean>(false);
    labelField = new FormControl('');

    dummyItems = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];


    ngOnInit(): void {
    }

    toggleOverlayHandler(){
        this.isOptionOpen.set(!this.isOptionOpen());
    }

    toggleAddLabelHandler(){
        this.showAddLabelField.set(!this.showAddLabelField());
        if (this.labelField.value && this.labelField.value.length > 0) {
            //    Add input handler here 
            this.toggleOverlayHandler();
            this.labelField.reset();
        }
    }

}
