import { Component, OnInit } from '@angular/core';
import { langChange } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  tittle: string = '';

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

      this.tittle = 'Tecnologías';


    } else {

      this.tittle = 'Skills';

    }
  }

}


