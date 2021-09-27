import { Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private baseUrl = "http://localhost:5001/api/carro";

  constructor(private http: HttpClient) { }

  list(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.baseUrl}/list`);
  }

  create(carro: Carro): Observable<Carro>{
    return this.http.post<Carro>(`${this.baseUrl}/create`, carro);
  }
}
