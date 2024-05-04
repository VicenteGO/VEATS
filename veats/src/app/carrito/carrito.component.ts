import { Component } from '@angular/core';
import { PagoComponent } from '../pago/pago.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [PagoComponent,RouterLink,FooterComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

}
