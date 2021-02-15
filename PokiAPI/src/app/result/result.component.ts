import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { ActivatedRoute } from "@angular/router";
import { BuscaService } from '../busca.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  pokemon = {} as Pokemon;
  urlValue = "x";

  constructor(
    private buscaService: BuscaService,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.urlValue = this.route.snapshot.paramMap.get("pesquisa");
    this.getPokemon(this.urlValue);
  }

  getPokemon(value: string){
    this.buscaService.getPokeById(value).subscribe((pokemon:Pokemon ) => {
      this.pokemon = pokemon;
    });
  }

}
