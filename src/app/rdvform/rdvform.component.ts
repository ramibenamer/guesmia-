// rdvform.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RdvService } from '../rdv.service';

@Component({
  selector: 'app-rdvform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './rdvform.component.html',
  styleUrls: ['./rdvform.component.css'],
})

export class RdvformComponent {
  form: FormGroup;
  professionals = ['Dr. Fares', 'Dr. Amine', 'Dr. Mohamed'];

  constructor(private fb: FormBuilder, private rdvService: RdvService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      professionalName: ['', Validators.required],
      availability: ['', Validators.required],
      compagnants: this.fb.array([]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      this.rdvService.addRdv(formData); // Add to shared service
      this.form.reset(); // Reset the form
      this.router.navigate(['/listrdv']); // Navigate to the list page
    }
  }

  addCompagnant() {
    if (this.compagnants.length < 3) {
      this.compagnants.push(
        this.fb.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          genre: ['', Validators.required],
          age: ['', [Validators.required, Validators.min(0)]],
        })
      );
    }
  }

  removeCompagnant(index: number) {
    this.compagnants.removeAt(index);
  }

  get compagnants() {
    return this.form.get('compagnants') as any;
  }

  get isFormValid() {
    return this.form.valid && this.compagnants.valid;
  }
}