import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { langChange } from 'src/app/services/idioma.service';




@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: []
})
export class HeadComponent implements OnInit {

  idioma: string = this.lang();
  about: string = 'Sobre Mi';
  skills: string = 'Tecnologías';
  projects: string = 'Proyectos';
  contact: string = 'Contactame';
  home: string = 'Inicio';


  constructor(private router: Router, private langChange: langChange) { }

  ngOnInit(): void {
  }
  lang() {
    sessionStorage.setItem('lang', 'ES');
    return sessionStorage.getItem('lang');
  }

  cambiarId() {
    if (sessionStorage.getItem('lang') === 'ES') {
      sessionStorage.setItem('lang', 'EN');
      this.about = 'About Me';
      this.skills = 'Skills';
      this.projects = 'Projects';
      this.contact = 'Contact me';
      this.home = 'Home';
      this.idioma = 'EN';
      this.langChange.changLay();
    } else {
      sessionStorage.setItem('lang', 'ES');
      this.about = 'Sobre Mi';
      this.skills = 'Tecnologías';
      this.projects = 'Proyectos';
      this.contact = 'Contactame';
      this.home = 'Inicio';
      this.idioma = 'ES';
      this.langChange.changLay();
    }
  }

}
