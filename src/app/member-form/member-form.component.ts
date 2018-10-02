import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  lastnameCtrl: FormControl;
  firstnameCtrl: FormControl;
  phoneNumberCtrl: FormControl;
  emailCtrl: FormControl;
  knowledgeCtrl: FormControl;
  memberForm: FormGroup;

  knowledgeList = [' ', 'JavaScript', 'TypeScript', 'Angular'];

  constructor(fb: FormBuilder) {
    // Création des contrôles
    this.lastnameCtrl = fb.control('', [Validators.required, Validators.pattern('^[A-Z].*')]);
    this.firstnameCtrl = fb.control('', [Validators.required]);
    this.phoneNumberCtrl = fb.control('', [Validators.pattern('[0-9]{10}')]);
    this.emailCtrl = fb.control('',[Validators.email, Validators.required]);
    this.knowledgeCtrl = fb.control('', [Validators.minLength(2)]);

    // Création du groupe (aka le formulaire)
    this.memberForm = fb.group({
      lastname: this.lastnameCtrl,
      firstname: this.firstnameCtrl,
      phoneNumber: this.phoneNumberCtrl,
      email: this.emailCtrl,
      knowledge: this.knowledgeCtrl
    });
  }
  ngOnInit() {
  }

  handleClear(){
    this.lastnameCtrl.setValue('');
    this.firstnameCtrl.setValue('');
    this.phoneNumberCtrl.setValue('');
    this.emailCtrl.setValue('');
    this.knowledgeCtrl.setValue('');
  }

  handleSubmit() {
    console.log(this.memberForm.value);
  }
}
