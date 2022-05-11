import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './qcca-header/qcca-header.component';
import { FooterComponent } from './qcca-footer/qcca-footer.component';
import { IgoLanguageModule } from '@igo2/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IgoLanguageModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class QccaModule { }
