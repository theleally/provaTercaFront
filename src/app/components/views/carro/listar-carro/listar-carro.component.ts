import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.component.html',
  styleUrls: ['./listar-carro.component.css']
})
export class ListarCarroComponent implements OnInit {

  carros: Carro[] = [];

  constructor(private service: CarroService) {}

  
  ngOnInit(): void {
    this.service.list().subscribe((carros) => {
      this.carros = carros;
      console.log(carros);
    });
   
  }

}
