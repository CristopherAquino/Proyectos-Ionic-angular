import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugeridosDetallePageRoutingModule } from './sugeridos-detalle-routing.module';

import { SugeridosDetallePage } from './sugeridos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugeridosDetallePageRoutingModule
  ],
  declarations: [SugeridosDetallePage]
})
export class SugeridosDetallePageModule {}
