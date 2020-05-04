import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'formly-field-input',
 template: `
   <input type="input" [formControl]="formControl" [formlyAttributes]="field">
   
   <div>
    <input  type="button"  value="±" (click)="virtualKeyboardClick($event)"/>
    <input  type="button"  value="µ" (click)="virtualKeyboardClick($event)"/>
    <input  type="button"  value="≤" (click)="virtualKeyboardClick($event)"/>
    <input  type="button"  value="≥" (click)="virtualKeyboardClick($event)"/>
  </div>
 `,
})
export class FormlyFieldInput extends FieldType implements OnInit {

  ngOnInit() {
    this.form.valueChanges.subscribe( (changes)=> console.log("CCCHCHANGES",changes));
  }

  virtualKeyboardClick(event){
    this.formControl.setValue(
      (this.formControl.value || '') + event.target.value
    );
    // How do I trigger a change
    // this.model = {... this.model}
  }

}