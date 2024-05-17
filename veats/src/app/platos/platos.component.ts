import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data/service.service';
import { Platos } from '../common/platos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})

export class PlatosComponent implements OnInit {

  platos: Platos[] = [];

  constructor(private dataservice:DataService,private cdRef:ChangeDetectorRef){}

  ngOnInit(){
      this.traerplatos();

  }

  traerplatos(){

    this.dataservice.getPlatos().subscribe((data:any)=>
      {
        if (data) {
          this.platos = data.platos;
          this.cdRef.detectChanges();
        } else {

        }
      }
    );

  }


}