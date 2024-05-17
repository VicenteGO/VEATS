import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PlatosComponent } from '../platos/platos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink, RouterLinkActive, PlatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
