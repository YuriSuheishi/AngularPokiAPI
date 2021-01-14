import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  chave = 'pikachu';

  constructor() { }

  ngOnInit(): void {
  }

  valor(){
    var inputValue = (<HTMLInputElement>document.getElementById('InputBusca')).value;
    this.chave = inputValue;
    alert(inputValue);
  } 
}
