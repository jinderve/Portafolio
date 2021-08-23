import { Component, OnInit } from '@angular/core';
import { langChange } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  list = ['Bienvenido a', 'Soy Javier Molina'];
  list1 = ['mi Portafolio', 'Desarrollador Web'];
  tittle: string = 'Inicio';

  constructor(private langChange: langChange) {
    langChange.changLayCalled$.subscribe(
      () => {
        console.log('hola aver');
        this.setIdiom();
      }
    );
  }


  ngOnInit(): void {
    this.setIdiom();
  }

  setIdiom() {
    if (sessionStorage.getItem('lang') === 'ES') {
      this.list = ['Bienvenido a', 'Soy Javier Molina'];
      this.list1 = ['mi Portafolio', 'Desarrollador Web'];

    } else {
      this.list = ['Welcome to', "I'm Javier Molina"];
      this.list1 = ['my Portfolio', 'Web Developer'];

    }
  }
}
