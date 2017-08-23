import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Post } from "app/models/post";

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    constructor(private http: Http) { }

    getPosts(): Observable<Post[]> {
        return this.http
            .get('http://jsonplaceholder.typicode.com/posts')
            .map(response => response.json())
    }

    savePost(post: Post) {
        return this.http
            .post('http://jsonplaceholder.typicode.com/posts', post)
            .map(response => response.json())
    }
}
