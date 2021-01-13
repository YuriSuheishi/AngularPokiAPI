import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { BuscaService } from '../busca.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  pokemon = {} as Pokemon;

  constructor(private buscaService: BuscaService) { }


  ngOnInit(): void {
    this.getPokemon("1");
  }

  getPokemon(value: string){
    this.buscaService.getPokeById(value).subscribe((pokemon:Pokemon ) => {
      this.pokemon = pokemon;
    });
  }

}
