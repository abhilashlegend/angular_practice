import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f') signupForm: NgForm;
	defaultQuestion: string = "teacher";
	answer: string = "";
	user = {
		username: '',
		email: '',
		question: '',
		answer: '',
		gender: ''
	};
	submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* Method to set multiple form controls */
   /* this.signupForm.setValue({
    	userData: {
    		username: suggestedName,
    		email: ''
    	},
    	secret: 'pet',
    	questionanswer:'',
    	gender: 'male' 
    }); */
    /* Method to set specific form control */
    this.signupForm.form.patchValue({
    	userData: {
    		username: suggestedName
    	}
    });

  }

  /* onSubmit(form: NgForm) {
  	console.log(form);
  } */


  onSubmit() {
  	// console.log(this.signupForm);
  	this.submitted = true;
  	this.user.username = this.signupForm.value.userData.username;
  	this.user.email = this.signupForm.value.userData.email;
  	this.user.question = this.signupForm.value.secret;
  	this.user.answer = this.signupForm.value.questionanswer;
  	this.user.gender = this.signupForm.value.gender;

  	this.signupForm.reset();
  }
}
