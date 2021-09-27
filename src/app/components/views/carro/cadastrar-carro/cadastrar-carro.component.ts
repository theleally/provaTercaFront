import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent implements OnInit {

  nome!: string;

  constructor(private router: Router, private service: CarroService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let carro: Carro = {
      nome: this.nome
    };
    this.service.create(carro).subscribe(carro => {
      console.log(carro);
      this.router.navigate(["carro/listar"]);
    });
    
  }

}
