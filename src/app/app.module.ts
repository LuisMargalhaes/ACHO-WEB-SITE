import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule
      // Inclua FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: []  // Não é necessário definir nenhum componente se não estiver usando o AppComponent
})
export class AppModule { }
