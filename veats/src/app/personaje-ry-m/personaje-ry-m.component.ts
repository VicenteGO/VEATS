import { Component, OnInit } from '@angular/core';
import { Personaje } from '../common/personaje';
import { APIServiceService } from '../data/apiservice.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { RickyMortyComponent } from '../ricky-morty/ricky-morty.component';

@Component({
  selector: 'app-personaje-ry-m',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FooterComponent, RickyMortyComponent],
  templateUrl: './personaje-ry-m.component.html',
  styleUrl: './personaje-ry-m.component.css'
})
export class PersonajeRyMComponent implements OnInit {
  bdataPersonajeONE!: Personaje;
  constructor(
    private apiservice: APIServiceService,
    private activatedRouted: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadONEPersonaje();
  }

  loadONEPersonaje() {
    const id = this.activatedRouted.snapshot.params['parametro'];
    
    this.apiservice.GetPersonaje(id).subscribe({
      next: (data) => {
        this.bdataPersonajeONE = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  CambiaChar(id:number){
    if(id>0 && id<827 ){
      this.router.navigateByUrl('/personajes/'+id)
       .then(() => this.loadONEPersonaje)
    }
  }

}
