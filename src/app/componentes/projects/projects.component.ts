import { Component, OnInit } from '@angular/core';
import { langChange } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  tittle: string = '';
  rep: string = '';
  constructor(private langChange: langChange) {
    langChange.changLayCalled$.subscribe(
      () => {
        this.setIdiom();
      }
    );
  }

  ngOnInit(): void {
    this.setIdiom();
  }

  setIdiom() {
    if (sessionStorage.getItem('lang') === 'ES') {

      this.tittle = 'Proyectos';
      this.rep = 'Repositorio';

    } else {

      this.tittle = 'Projects';
      this.rep = 'Repository';
    }
  }

}
