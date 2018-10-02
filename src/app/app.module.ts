import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MyOwnCustomMaterialModule } from './app.material.module';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberFormComponent,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
