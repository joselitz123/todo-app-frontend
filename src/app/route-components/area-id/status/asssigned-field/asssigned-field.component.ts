import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-asssigned-field',
  imports: [CdkOverlayOrigin, CdkConnectedOverlay ],
  templateUrl: './asssigned-field.component.html',
  styles: ``
})
export class AsssignedFieldComponent {

    protected isOptionOpen = signal<boolean>(true);
    dummyItems = ['Josel', 'Mae']
    

    toggleOverlayHandler(){
        console.log("show panel");
        this.isOptionOpen.set(!this.isOptionOpen());
    }
}
