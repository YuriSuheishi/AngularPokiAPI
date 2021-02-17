import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Evolve } from '../models/evolve';
import { ActivatedRoute } from "@angular/router";
import { BuscaService } from '../busca.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  pokemon = {} as Pokemon;
  evolve = {} as Evolve;
  urlValue = "x";

  constructor(
    private buscaService: BuscaService,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.urlValue = this.route.snapshot.paramMap.get("pesquisa");
    this.getPokemon(this.urlValue);
    this.getEvolucao();
  }

  getPokemon(value: string){
    this.buscaService.getPokeById(value).subscribe((pokemon:Pokemon) => {
      this.pokemon = pokemon;
    });
  }

  getEvolucao(){
    this.buscaService.getEvolve().subscribe((evolve:Evolve) => {
      this.evolve = evolve;
    });
    console.log(this.evolve.id);
  }

}
