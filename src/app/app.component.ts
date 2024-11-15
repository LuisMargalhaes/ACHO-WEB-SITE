import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProfileEmpresaComponent } from "./profile-empresa/profile-empresa.component";
import { CursosProfileComponent } from './cursos-profile/cursos-profile.component';
import { CourseListComponent } from "./inscritos-cursos/inscritos-cursos.component";
import { AutenticationSchollComponent } from './autentication-scholl/autentication-scholl.component';
import { AutenticationDesloginComponent } from './autentication-deslogin/autentication-deslogin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileEmpresaComponent, CursosProfileComponent, CourseListComponent, AutenticationSchollComponent, AutenticationDesloginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ACHO';
}
