import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { inject, Injectable } from '@angular/core';
import { LabelAPIResponseType } from '../../../../generic';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root'
})
export class LabelFieldService {
    private http = inject(HttpClient);

    getLabelList(areaId: number){
        return this.http.get<LabelAPIResponseType>(environment.backend_api_url + environment.backend_api.label.get + `?area_id=${areaId}`).pipe(takeUntilDestroyed());
    }
}

