import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent, DepositionsComponent} from './component';

export const HomeRoutes: Routes = [
    {
        path: 'depositions',
        component: DepositionsComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class DepositionsRoutingModule {
}
