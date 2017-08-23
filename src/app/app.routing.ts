import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from "app/components/post/post-list.component";


export const ROUTES: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostListComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
