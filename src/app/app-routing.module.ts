import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [

    { path: 'login', component: LoginComponent },
    {
        path: 'task',
        canLoad: [ AuthGuard ],
        loadChildren: () => import('./task/task.module').then( m => m.TaskModule )
    },
    { path: '**', redirectTo: 'task' },

];


@NgModule({

    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}
