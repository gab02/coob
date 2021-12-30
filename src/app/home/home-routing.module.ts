import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent, HomeComponent} from './component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class HomeRoutingModule {
}
