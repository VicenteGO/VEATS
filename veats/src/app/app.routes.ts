import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PagoComponent } from './pago/pago.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: 'home', title: 'Home',component: HomeComponent},
    {path: 'login', title: 'Login',component: LoginComponent},
    {path: 'register', title: 'Register',component: RegisterComponent},
    {path: 'pago', title: 'Pago',component: PagoComponent},
    {path: 'carrito', title: 'Cart',component: CarritoComponent},
    {path: 'catalogo', title: 'Catalog',component: CatalogoComponent},
    {path: 'contacto', title: 'Cantact',component: ContactoComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: ErrorComponent}

];
