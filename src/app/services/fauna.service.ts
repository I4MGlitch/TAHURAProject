import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaunaService {

  private baseUrl = 'https://tahura.netlify.app';

  constructor(private http: HttpClient) {}

  getFaunaDetails(id: String): Observable<any> {
    const url = `${this.baseUrl}/api/getFaunaDetails/${id}`;
    return this.http.get<any>(url);
  }
  getAllFauna(): Observable<any> {
    const url = `${this.baseUrl}/api/getAllFauna`;
    return this.http.get<any>(url);
  }
}
