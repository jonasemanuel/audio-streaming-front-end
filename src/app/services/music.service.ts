import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:5192/musics'
  constructor(private readonly httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.baseUrl}`)
  }

  search(query: string) {
    return this.httpClient.get(`${this.baseUrl}/search?q=${query}`)
  }
}
