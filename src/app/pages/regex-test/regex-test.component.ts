import { Component, OnInit } from '@angular/core';
import { User } from '../../core/service/auth/auth.model';
import { AuthService } from '../../core/service/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regex-test',
  templateUrl: './regex-test.component.html',
  styleUrls: ['./regex-test.component.scss']
})
export class RegexTestComponent implements OnInit {
  loginUser: User;
  regexTest: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginUser = this.authService.getLoginUser();
    this.regexTest = this.route.snapshot.data?.regexTest;
    console.log('regexTest', this.regexTest);
  }

  addRegexCase(): void {
    this.regexTest.doc.collection('regexCase').add({
      regex: 'ho'
    });
  }

  addTestCase(): void {
    this.regexTest.doc.collection('testCase').add({
      test: 'ho'
    });
  }
}
