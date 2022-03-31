import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.max(180)]],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public onSubmit() {
    console.table(this.reactiveForm.value);
  }
}
