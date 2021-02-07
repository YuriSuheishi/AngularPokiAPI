import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  chave = " ";
  formulario: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      input:[null]
    });
  }

  onSubmit(){
    var poke = this.formulario.value.input;
    console.log(poke);
    this.router.navigate(['/result/', poke]);
  }
}
