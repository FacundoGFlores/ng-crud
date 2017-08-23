import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { PostsService } from "app/services/posts.service";
import { ComponentsModule } from "app/components/components.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        ROUTING,
        ComponentsModule,
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
