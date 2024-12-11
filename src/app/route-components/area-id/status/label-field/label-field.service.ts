import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { LabelAPIResponseType, LabelPostAPIPayloadType } from '../../../../generic';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Injectable({
  providedIn: 'root'
})
export class LabelFieldService {
    private http = inject(HttpClient);
    private destroyRef = inject(DestroyRef);

    getAreaLabels(areaId: number){
        return this.http.get<LabelAPIResponseType>(environment.backend_api_url + environment.backend_api.label.get + `?area_id=${areaId}`);
    }

    insertLabel(name: string, color: string, areaId: number){
        return this.http.post<LabelAPIResponseType>(
            environment.backend_api_url + environment.backend_api.label.post
            , {area_id: areaId, label_color: color, label_name: name} as LabelPostAPIPayloadType
            ).pipe(takeUntilDestroyed(this.destroyRef));
    }
}

