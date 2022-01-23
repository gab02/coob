import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent, FuncionamentoComponent} from './component';

export const HomeRoutes: Routes = [
    {
        path: 'funcionamento',
        component: FuncionamentoComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class FuncionamentoRoutingModule {
}
