import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent, PromotionsComponent} from './component';

export const HomeRoutes: Routes = [
    {
        path: 'promotions',
        component: PromotionsComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})
export class PromotionsRoutingModule { }
