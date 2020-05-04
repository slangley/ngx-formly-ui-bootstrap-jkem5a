import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {Subject, Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
 selector: 'formly-field-input',
 template: `
  <p>{{barz | async}}</p>

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
  private barz:Observable<string>;


  ngOnInit() {
    this.fooz.subscribe((val)=>console.log("FOOXZ", val));

    //If you want to use a separate Subject (less than ideal)
    this.form.valueChanges.subscribe( (changes)=> {
        let fooz = changes[this.to.fooz];
        if (fooz) {
          this.fooz.next(fooz);
        }
    });


    // Using switchMap and returning different observable (BETTER!!!)
    this.barz = this.form.valueChanges.pipe(switchMap((val)=> {
      console.log("V",val);
      return of(val[this.to.barz])
    }));

    
  }

  virtualKeyboardClick(event){
    this.formControl.setValue(
      (this.formControl.value || '') + event.target.value
    );
    // How do I trigger a change
    // this.model = {... this.model}
  }

}