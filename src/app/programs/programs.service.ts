import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, Observable, take, tap } from 'rxjs';
import { ProgramsI } from './programs.interface';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  private readonly urlPrograms = 'assets/language';

  private readonly _http = inject(HttpClient);

  public esLanguage(): Observable<ProgramsI[]> {
    const url = `${this.urlPrograms}/es.json`;

    return this._http.get<ProgramsI[]>(url).pipe(
      take(1),
      tap((resp: ProgramsI[]) => resp),
      catchError((err: HttpResponseBase) => {
        throw err;
      }),
    );
  }

  public enLanguage(): Observable<ProgramsI[]> {
    const url = `${this.urlPrograms}/en.json`;

    return this._http.get<ProgramsI[]>(url).pipe(
      take(1),
      tap((resp: ProgramsI[]) => resp),
      catchError((err: HttpResponseBase) => {
        throw err;
      }),
    );
  }
}
