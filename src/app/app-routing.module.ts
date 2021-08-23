import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./componentes/about-me/about-me.component";
import { ContactFormComponent } from "./componentes/contact-form/contact-form.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ProjectsComponent } from "./componentes/projects/projects.component";
import { SkillsComponent } from "./componentes/skills/skills.component";

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact-form', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }