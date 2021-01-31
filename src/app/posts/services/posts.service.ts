import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable()
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.URL}/posts`);
  }
}
