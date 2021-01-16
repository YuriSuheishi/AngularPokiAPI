import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  chave;

  constructor() { }

  ngOnInit(): void {
    this.valor();
  }

  valor(){
    this.chave = (<HTMLInputElement>document.getElementById('InputBusca')).value;
  } 
}
