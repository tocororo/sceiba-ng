import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { AuthBackend, MessageHandler, StatusCode } from 'toco-lib'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  public siteKey: string;

  @Input()
  public rows: number = 8;

  @Input()
  public width: string = '100%';

  public formGroup: FormGroup;

  constructor(private contactService: ContactService, private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contactService.backend = AuthBackend.sceiba;
    this.formGroup = this._formBuilder.group({
      email: new FormControl(null, Validators.email),
      topic: new FormControl(null),
      body: new FormControl(null, Validators.required)
    });
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public send(){
    if (this.formGroup.valid){
      this.contactService.send(this.formGroup.value).subscribe({
        next: response => {
          console.log(response);
          if (response) {
            const m = new MessageHandler(this._snackBar);
            m.showMessage(StatusCode.OK,"Mensaje enviado correctamente");
          }
        },
        error: e => console.log(e),
      });
    }
  }
}
