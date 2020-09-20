import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-regex-test-create',
  templateUrl: './regex-test-create.component.html',
  styleUrls: ['./regex-test-create.component.scss']
})
export class RegexTestCreateComponent implements OnInit {

  formControl: FormControl;

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required]);
  }

  onCreateRegexTest(): void {
    if (!this.formControl.valid) {
      return;
    }
  }
}
