import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Proyecto-Angular';
  constructor(private router:Router){}

  loginPersona(){
  this.router.navigate(["loginPersona"]);
}

InicioComponent(){
  this.router.navigate(["inicio"])
}
}

