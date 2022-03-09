import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  // individual FormGroup and FormControls
  // cardForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   friendsName: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //   ]),
  // });

   cardForm = this.fb.group({
     name: ['', [Validators.required, Validators.minLength(3)]],
     friendsName: [''],
     address: this.fb.group({
       street: [''],
       city: [''],
       state: [''],
       zip: [''],
     }),
     aliases: this.fb.array([
       this.fb.control('')
     ])
   });

  onSubmit() {
    console.log(this.cardForm.value);
  }

  updateCard() {
    this.cardForm.patchValue({
      name: 'Mother',
      friendsName: 'Pants',
    });
  }

  clearCard() {
    this.cardForm.patchValue({
      name: '',
      friendsName: '',
      address: ({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  get aliases() {
    return this.cardForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit(): void {}
}
