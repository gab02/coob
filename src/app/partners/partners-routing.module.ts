import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent, PartnersComponent} from './component';

export const HomeRoutes: Routes = [
    {
        path: 'partners',
        component: PartnersComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class PartnersRoutingModule { }
