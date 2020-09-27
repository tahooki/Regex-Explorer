import { Component, OnInit } from '@angular/core';
import { User } from '../../core/service/auth/auth.model';
import { AuthService } from '../../core/service/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RegexTest } from './resolver/regex-test.model';
import { FormControl, Validators } from '@angular/forms';
import { RegexTestService } from './regex-test.service';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-regex-test',
  templateUrl: './regex-test.component.html',
  styleUrls: ['./regex-test.component.scss']
})
export class RegexTestComponent implements OnInit {
  loginUser: User;
  regexTest: RegexTest;
  regexCaseList: any[];
  testCaseList: any[];
  isShowRegexAddInput = false;
  isShowTestCaseAddInput = false;

  regexAddControl = new FormControl('', Validators.required);
  testCaseAddControl = new FormControl('', Validators.required);


  constructor(
    private service: RegexTestService,
    private route: ActivatedRoute,
    private fireStorage: AngularFirestore,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginUser = this.authService.getLoginUser();
    console.log('this.loginUser', this.loginUser);
    this.regexTest = this.route.snapshot.data?.regexTest;
    this.regexCaseList = this.regexTest.regexCaseList;
    // this.fireStorage.collection('testCase').valueChanges().subscribe('흠...'); 이걸로 받아야 하나?

    this.regexTest.doc.ref.collection('regexCase').orderBy('createdAt').onSnapshot((snapshot) => {
      const regexCaseList = snapshot.docs.map(doc => {
        const result = doc.data();
        result.doc = doc;

        return result;
      });

      console.log('regexCaseList', regexCaseList);

      this.regexCaseList = regexCaseList;
    });
  }

  onAddRegexCase() {
    if (!this.regexAddControl.valid) {
      return;
    }

    const regex = this.regexAddControl.value;
    const regexCase = {
      regex,
      userId: this.loginUser.uid,
      userName: this.loginUser.name,
      userImage: this.loginUser.image,
      regexTestId: this.regexTest.uid,
      updatedAt: Timestamp.now(),
      createdAt: Timestamp.now()
    };

    const collection = this.regexTest.doc.ref.collection('regexCase');

    console.log('collection', collection);

    this.service.addRegexCase(collection, regexCase);

    this.isShowRegexAddInput = false;
  }

  onShowAddRegexInput() {
    if (!this.loginUser) {
      console.log('로그인 페이지로 이동');
      return;
    }

    this.isShowRegexAddInput = true;
  }

  onAddTestCase() {
    if (!this.testCaseAddControl.valid) {
      return;
    }

    const test = this.testCaseAddControl.value;
    const testCase = {
      test,
      userId: this.loginUser.uid,
      regexTestId: this.regexTest.uid,
      updatedAt: Timestamp.now(),
      createdAt: Timestamp.now()
    };

    const collection = this.regexTest.doc.ref.collection('testCase');

    console.log('collection', collection);

    this.service.addTestCase(collection, testCase);

    this.isShowTestCaseAddInput = false;
  }

  onShowAddTestCaseInput() {
    if (!this.loginUser) {
      console.log('로그인 페이지로 이동');
      return;
    }

    this.isShowTestCaseAddInput = true;
  }

  onDeleteRegex(regexItem) {
    console.log('regexItem', regexItem);
    if (confirm('삭제하시겠습니까?')) {
      regexItem.doc.ref.delete();

    }
    // const collection = this.regexTest.doc.ref.collection('regexCase');
    //
    // this.service.deleteRegexCase(collection, regexId);
  }
}
