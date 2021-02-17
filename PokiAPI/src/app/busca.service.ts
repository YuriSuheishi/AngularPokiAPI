import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pokemon } from './models/pokemon';
import { Evolve } from './models/evolve';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  url = "https://pokeapi.co/api/v2/";

  //colocando HttpClient
  constructor(private httpClient: HttpClient) { }

  //header
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json' })
  }

  //Obtem pokemon por id ou nome 
  getPokeById(id: string):Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(this.url + 'pokemon/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  //Obtem o bulbassauro
  getPoke():Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(this.url + 'pokemon/1')
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  

  //Obtem cadeia de evolucao
  getEvolve():Observable<Evolve>{
    console.log("Entrou!")
    return this.httpClient.get<Evolve>('https://pokeapi.co/api/v2/evolution-chain/1/')
    .pipe(
      retry(2),
      catchError(this.handleError),
    )
  }

  //Obtem cadeia de evolução por id
  getEvolChain(id: string):Observable<Evolve>{
    return this.httpClient.get<Evolve>(this.url + 'evolution-chain/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Lida com erro
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Erro ocorreu pelo cliente
      errorMessage = error.error.message;
    }
    else{
      //Erro ocorreu do lado do servidor
      errorMessage = 'Código do erro: ${erros.status},' + 'mensagem: ${error.message}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
