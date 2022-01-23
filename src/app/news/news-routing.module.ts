import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent,NewsComponent} from './component';

export const HomeRoutes: Routes = [
    {
        path: 'news',
        component: NewsComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})



export class NewsRoutingModule { }
