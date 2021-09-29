import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovel } from 'src/app/models/automovel';
import { AutomovelService } from 'src/app/services/automovel.service';

@Component({
  selector: 'app-cadastrar-automovel',
  templateUrl: './cadastrar-automovel.component.html',
  styleUrls: ['./cadastrar-automovel.component.css']
})
export class CadastrarAutomovelComponent implements OnInit {

  marca!: string;
  modelo!: string;
  preco!: number;
  quantidade!: number;

  constructor(private router: Router, private service: AutomovelService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let automovel : Automovel = {
      marca: this.marca,
      modelo: this.modelo,
      preco: this.preco,
      quantidade: this.quantidade,
    };
    this.service.create(automovel).subscribe(automovel => {
      console.log(automovel);
      this.router.navigate(["automovel/listar"]);
    });
    
  }

}
