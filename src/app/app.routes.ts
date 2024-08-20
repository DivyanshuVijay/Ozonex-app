import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RwaComponent } from './pages/rwa/rwa.component';

export const routes: Routes = [
    {
        path:'',
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'rwa',
                component:RwaComponent
            }
        ]
    }
];
