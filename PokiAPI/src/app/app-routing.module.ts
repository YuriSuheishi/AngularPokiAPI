import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaComponent } from './busca/busca.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path:"", component: BuscaComponent},
  { path: "result", component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
