import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/tide/home',
        pathMatch: 'full'
    },
    {
      path: 'tide',
      loadChildren: () => import('./tide/tide.module').then(m => m.TideModule)
    },
    {
      path: 'hackathons',
      loadChildren: () => import('./hackathon/hackathon.module').then(m => m.HackathonModule)
    },
    {
      path: 'patents',
      loadChildren: () => import('./patents/patents.module').then(m => m.PatentsModule)
    },
    {
      path: 'exp-center',
      loadChildren: () => import('./exp-center/exp-center.module').then(m => m.ExpCenterModule)
    },
    {
      path: 'architecture-center',
      loadChildren: () => import('./architecture-center/architecture-center.module').then(m => m.ArchitectureCenterModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
