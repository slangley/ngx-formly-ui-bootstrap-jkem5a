import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {Subject} from 'rxjs';

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

  private fooz = new Subject<string>();

  ngOnInit() {
    this.fooz.subscribe((val)=>console.log("FOOXZ", val));

    this.form.valueChanges.subscribe( (changes)=> {
        let fooz = changes[this.to.fooz];
        if (fooz) {
          this.fooz.next(fooz);
        }
    });
  }

  virtualKeyboardClick(event){
    this.formControl.setValue(
      (this.formControl.value || '') + event.target.value
    );
    // How do I trigger a change
    // this.model = {... this.model}
  }

}