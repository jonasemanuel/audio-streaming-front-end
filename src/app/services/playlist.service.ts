import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private baseUrl = 'http://localhost:5192/playlists'

  constructor(private readonly httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.baseUrl}`)
  }

  getById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }

  addMusic(id: number, musicId: number) {
    return this.httpClient.post(`${this.baseUrl}/${id}/musics/${musicId}`, {})
  }

}
