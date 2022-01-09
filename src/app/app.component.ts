import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

enum Subscription {
  BASIC = 'Basic',
  ADVANCED = 'Advanced',
  PRO = 'Pro'
}

enum FieldName {
  EMAIL = 'email',
  SUBSCRIPTION = 'subscription',
  PASSWORD = 'password'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FieldName = FieldName

  Subscription = Subscription

  subscriptions = Object.values(Subscription)

  @ViewChild('subscriptionForm')
  subscriptionForm: NgForm

  submittedValues: { [key: string]: string } | undefined;

  showError = (fieldModel: NgModel) => {
    return !fieldModel.valid && fieldModel.touched
  }

  onFormSubmit = () => {
    if (!this.subscriptionForm.valid) {
      return
    }

    this.submittedValues = this.subscriptionForm.value
  }

  resetSubmission = () => {
    this.submittedValues = undefined
    this.subscriptionForm.reset({
      [FieldName.SUBSCRIPTION]: Subscription.ADVANCED
    })
  }
}
