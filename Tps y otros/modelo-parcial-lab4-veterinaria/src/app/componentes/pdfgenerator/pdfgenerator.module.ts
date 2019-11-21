import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDFgeneratorComponent } from './pdfgenerator.component';


@NgModule({
  declarations: [PDFgeneratorComponent],
  imports: [
    CommonModule,
  ],
  exports : [PDFgeneratorComponent]
})
export class PdfgeneratorModule { }
