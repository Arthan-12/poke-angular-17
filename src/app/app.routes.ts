import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'my-team',
    component: MyTeamComponent,
  },
];
