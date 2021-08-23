import { Component, OnInit } from '@angular/core';
import { langChange } from 'src/app/services/idioma.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: []
})

export class AboutMeComponent implements OnInit {
  tittle: string = '';
  subtittle: string = '';
  text: string = '';
  cv: string = '';
  idi: string = sessionStorage.getItem('lang');


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

      this.tittle = 'Sobre Mi';
      this.subtittle = 'Javier Molina Desarrollador Web';
      this.text = 'Soy una persona autodidacta y amante de latecnología, me gusta expandir mis horizontesa través de desafíos constantes que me ayuden a obtener experiencia e ir mas allá delo ordinario.   Mi mayor fortalezaes mi determinacion ya que cuando me pongoun objetivo hago todo por llegar a el.';
      this.cv = 'Descargar Cv';
    } else {

      this.tittle = 'About Me';

      this.subtittle = 'Javier Molina Web Developer';
      this.text = 'I am a self-taught developer and a lover of technology, I like to expand my horizons through constant challenges that help me gain experience and go beyond the ordinary. My greatest strength is my determination because when I set a goal I do everything to reach it. ';
      this.cv = 'Download Cv';
    }
  }

}
