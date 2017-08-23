import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Post } from "app/models/post";

import 'rxjs/add/operator/map';

const rootUrl = 'http://localhost:3000';

@Injectable()
export class PostsService {

    constructor(private http: Http) { }

    getPosts(): Observable<Post[]> {
        return this.http
            .get(`${rootUrl}/posts`)
            .map(response => response.json())
    }

    savePost(post: Post) {
        return this.http
            .post(`${rootUrl}/posts`, post)
            .map(response => response.json())
    }

    updatePost(id: Number, post: Post) {
        return this.http
            .put(`${rootUrl}/posts/${id}`, post)
            .map(response => response.json())
    }

    deletePost(id: Number) {
        return this.http
            .delete(`${rootUrl}/posts/${id}`)
            .map(response => response.json())
    }
}
