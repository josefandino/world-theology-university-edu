import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, Observable, take, tap } from 'rxjs';
import { CertificatesI } from './certificates.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  private readonly urlCertificates = 'assets/certificates';

  private readonly _http = inject(HttpClient);

  public esLanguage(): Observable<CertificatesI[]> {
    const url = `${this.urlCertificates}/es.json`;

    return this._http.get<CertificatesI[]>(url).pipe(
      take(1),
      tap((resp: CertificatesI[]) => resp),
      catchError((err: HttpResponseBase) => {
        throw err;
      }),
    );
  }

  public enLanguage(): Observable<any> {
    const url = `${this.urlCertificates}/en.json`;

    return this._http.get<any>(url).pipe(
      take(1),
      tap((resp: any) => resp),
      catchError((err: HttpResponseBase) => {
        throw err;
      }),
    );
  }
}
