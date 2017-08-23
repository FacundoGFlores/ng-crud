import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { PostListComponent } from "./post/post-list.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ClarityModule
    ],
    declarations: [PostListComponent],
    exports: [
        ReactiveFormsModule,
        ClarityModule
    ]
})
export class ComponentsModule { }
