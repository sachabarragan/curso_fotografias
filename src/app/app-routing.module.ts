import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GenericComponent } from './components/pages/generic/generic.component';
import { PictureComponent } from './components/pages/picture/picture.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'generic', component: GenericComponent },
    { path: 'picture/:id', component: PictureComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {} 