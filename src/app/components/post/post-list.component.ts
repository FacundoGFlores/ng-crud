import { Component, OnInit } from "@angular/core";
import { PostsService } from "app/services/posts.service";
import { Observable } from "rxjs/Observable";
import { Post } from "app/models/post";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import 'rxjs/add/operator/switchMap';

@Component({
    styleUrls: ['./post-list.component.scss'],
    templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {

    postForm: FormGroup;
    posts$: Observable<Post[]>;
    opened: false;

    constructor(private _fb: FormBuilder, private postsService: PostsService) {
        this.postForm = this._fb.group({
            title: ['', [<any>Validators.minLength(4)]],
            body: ['']
        });
    }

    ngOnInit() {
        this.posts$ = this.postsService.getPosts();
    }

    save(post: Post, isValid: boolean) {
        // add user id
        post.userId = 1;
        if (isValid) {
            this.opened = false;
            this.posts$ = this.postsService.savePost(post)
                .switchMap(() => this.postsService.getPosts());
        } else {
            console.log("invalid form");
        }
    }
}
