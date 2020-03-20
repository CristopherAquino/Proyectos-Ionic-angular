import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugeridosPage } from './sugeridos.page';

const routes: Routes = [
  {
    path: '',
    component: SugeridosPage
  },
  {
    path: 'sugeridos-detalle',
    loadChildren: () => import('./sugeridos-detalle/sugeridos-detalle.module').then( m => m.SugeridosDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugeridosPageRoutingModule {}
