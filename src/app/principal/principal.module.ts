import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/productservice';
import { PrincipalRoutingModule } from './principal-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
