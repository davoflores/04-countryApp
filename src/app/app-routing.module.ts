import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { AboutPageComponent } from './shared/components/about-page/about-page.component';
import { ContactPageComponent } from './shared/components/contact-page/contact-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: 'contact',
        component: ContactPageComponent,
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ),
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule,
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }