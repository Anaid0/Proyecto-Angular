import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent} from './Personas/loginPersona/loginPersona.component';
import { InicioComponent } from './Personas/inicio/inicio.component';

export const routes: Routes = [
    {path: 'loginPersona', component:LoginComponent},
    {path: 'inicio', component:InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
