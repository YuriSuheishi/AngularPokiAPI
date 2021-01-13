import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pokemon } from './models/pokemon';

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
