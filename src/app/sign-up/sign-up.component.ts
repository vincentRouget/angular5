import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  // Instancier un modèle de données :
  model: Inscription = new Inscription("", "", "", "");
  submitted: boolean = false;
  constructor() { };

  // Méthode d'événement sur un submit :
  onSubmit(form: NgForm): void {
    this.submitted = true;
    console.log(this.model);
  };
};

// Créer un modèle de données orienté Objet (POO) :
export class Inscription {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string
  ) { };
};