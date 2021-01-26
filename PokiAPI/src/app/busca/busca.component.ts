import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  chave = " ";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.valor();
  }

  valor(){
    this.chave = (<HTMLInputElement>document.getElementById('InputBusca')).value;
  } 

  url(){
    this.chave = (<HTMLInputElement>document.getElementById('InputBusca')).value;
    this.router.navigate(['/result/', this.chave]);
  }

  save(valor: string){
    console.log(valor);
  }
}
