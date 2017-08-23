import { Component, OnInit } from "@angular/core";
import { PostsService } from "app/services/posts.service";
import { Observable } from "rxjs/Observable";

import { Post } from "app/models/post";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/publishReplay';

const MODE_LIST = 0;
const MODE_NEW = 1;
const MODE_EDIT = 2;

@Component({
    styleUrls: ['./post-list.component.scss'],
    templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {

    postForm: FormGroup;
    posts: Array<Post> = [];
    opened: boolean = false;
    confirmOpened: boolean = false;
    mode: Number = MODE_LIST;
    currentPost: Post = {} as Post;
    selected: Post = {} as Post;

    constructor(private _fb: FormBuilder, private postsService: PostsService) {
        this.postForm = this._fb.group({
            title: ['', [<any>Validators.minLength(4)]],
            body: ['']
        });
    }

    ngOnInit() {
        this.refreshPosts();
    }

    refreshPosts() {
        this.postsService.getPosts().subscribe(posts => { this.posts = posts; })
    }

    onNew() {
        this.opened = true;
        this.mode = MODE_NEW;
    }

    onEdit(post: Post) {
        this.opened = true;
        this.mode = MODE_EDIT;
        this.currentPost = post;
    }

    onDelete(post: Post) {
        this.confirmOpened = true;
        this.currentPost = post;
    }

    onConfirmDeletion(post) {
        this.postsService.deletePost(this.currentPost.id).subscribe(() => this.refreshPosts());
        this.backToList();
    }

    save(post: Post, isValid: boolean) {
        // add user id
        post.userId = 1;
        if (isValid) {
            switch (this.mode) {
                case MODE_NEW: {
                    this.postsService.savePost(post)
                        .subscribe(() => this.refreshPosts());
                    break;
                }
                case MODE_EDIT: {
                    this.postsService.updatePost(this.currentPost.id, post)
                        .subscribe(() => this.refreshPosts());
                    break;
                }
                default:
                    break;
            }
            this.backToList();
        } else {
            console.log("invalid form");
        }
    }

    backToList() {
        this.opened = false;
        this.confirmOpened = false;
        this.mode = MODE_LIST;
        this.currentPost = {} as Post;
    }
}
