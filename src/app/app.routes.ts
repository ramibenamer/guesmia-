import { Routes } from '@angular/router';
import { RdvformComponent } from './rdvform/rdvform.component';
import { ListrdvComponent } from './listrdv/listrdv.component';

export const routes: Routes = [
  { path: 'rdvform', component: RdvformComponent },
  { path: 'listrdv', component: ListrdvComponent },
  { path: '', redirectTo: '/rdvform', pathMatch: 'full' } // Redirection par défaut
];
