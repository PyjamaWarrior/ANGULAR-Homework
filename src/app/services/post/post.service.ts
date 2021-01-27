import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.URL}/posts?userId=${userId}`);
  }
}
