import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post<any>(`${this.baseUrl}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAll() {
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  update(data: any, id: number) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }


  getMarsImage() {
    const imageUrl = 'https://source.unsplash.com/random/800x600/?mars';
    return this.http.get(imageUrl, { responseType: 'json' });
  }
}
