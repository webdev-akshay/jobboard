import { Routes } from '@angular/router';
import { JobboardComponent } from './components/jobboard/jobboard.component';
import { ComparySalariesComponent } from './components/compary-salaries/compary-salaries.component';

export const routes: Routes = [
    {
     path:'',component:JobboardComponent,
    },
    {
    path:'company-salaries', component:ComparySalariesComponent
    }
];
