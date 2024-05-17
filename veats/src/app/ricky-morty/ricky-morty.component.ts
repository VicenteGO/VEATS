import { Component, OnInit } from '@angular/core';
import { RickyMorty } from '../common/ricky-morty';
import { APIServiceService } from '../data/apiservice.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ricky-morty',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FooterComponent],
  templateUrl: './ricky-morty.component.html',
  styleUrl: './ricky-morty.component.css'
})
export class RickyMortyComponent implements OnInit{

  bdataPersonajes! : RickyMorty
  constructor(private apiService: APIServiceService){}
  ngOnInit(): void {
    this.loadPersonaje();
  }
  loadPersonaje(){
    this.apiService.GetPersonajes().subscribe(
      {
        next: (data) =>{
          this.bdataPersonajes = data
          console.log(data)
        },
        error: err =>{
          console.log(err)
        },
        complete: () =>{
          console.log('completed')
        }
      }
    )
  }

}
