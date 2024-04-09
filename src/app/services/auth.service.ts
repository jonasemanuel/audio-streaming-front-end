import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5192/auth'
  constructor(private readonly httpClient: HttpClient) { }

  auth(email: string, password: string) {
    return this.httpClient.post(`${this.baseUrl}/login`, {email, password}, {responseType: 'text'})
  }
}
