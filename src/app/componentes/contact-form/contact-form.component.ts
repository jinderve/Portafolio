import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { langChange } from 'src/app/services/idioma.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  tittle: string = '';
  nameI: string = '';
  emailI: string = '';
  textI: string = '';
  submit: string = '';

  @ViewChild('spinner') spin: ElementRef;
  @ViewChild('contactform') contactform: NgForm;

  constructor(private formB: FormBuilder, private http: HttpClient, private render: Renderer2, private langChange: langChange) {
    this.form = this.formB.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
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

      this.tittle = 'Contactame';
      this.nameI = 'Ingresa tu Nombre';
      this.emailI = 'Ingresa tu Email';
      this.textI = 'Mensaje';
      this.submit = 'Enviar';

    } else {

      this.tittle = 'Contact Me';
      this.nameI = 'Enter your Name';
      this.emailI = 'Enter your Email';
      this.textI = 'Menssage';
      this.submit = 'submit';
    }
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable();
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true;
      this.submitted = false;
      const spinner = this.spin.nativeElement;
      this.render.addClass(spinner, "spinner");
      this.http.post<any>('https://script.google.com/macros/s/AKfycbw9Jlv_Z6KN4j55xslMLXFPiS14v6gJPyDQ8m1ISQ/exec', formData).subscribe(
        (response) => {
          this.render.removeClass(spinner, "spinner");
          if (response["result"] == "success") {
            if (sessionStorage.getItem('lang') === 'ES') {
              this.responseMessage = "Gracias por contactarme, Me pondre en contacto contigo pronto";
              this.contactform.reset();
            } else {
              this.responseMessage = "Thank you for contacting me, I will contact you soon";
            }
          } else {
            if (sessionStorage.getItem('lang') === 'ES') {
              this.responseMessage = "Oops! Algo salio mal... Recarga la pagina y prueba de nuevo.";
            } else {
              this.responseMessage = "Oops! Something went wrong ... Reload the page and try again.";
            }
          }
          //this.render.removeClass(this.spinner.nativeElement, "spinner");
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {

          this.responseMessage = "Oops! Ha ocurrido un error... Recarga la pagina y prueba de nuevo";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

}
