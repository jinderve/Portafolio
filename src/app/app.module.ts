import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ContactFormComponent } from './componentes/contact-form/contact-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { langChange } from './services/idioma.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    InicioComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactFormComponent,

  ],
  imports: [
    BrowserModule,
    AngularTypewriterEffectModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [langChange],
  bootstrap: [AppComponent]
})
export class AppModule { }
