import { Routes } from '@angular/router';
import { DataBindingComponent } from './Demos/data-binding/data-binding.component';
import { ContatoComponent } from './Institucional/contato/contato.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';
import { HomeComponent } from './Navegacao/home/home.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'features', component: DataBindingComponent}
];