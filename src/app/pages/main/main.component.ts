import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector:    'app-main',
  templateUrl: './main.component.html',
  styleUrls:   [ './main.component.scss' ]
})
export class MainComponent implements OnInit {

  bestTestList: any[];
  recentTestList: any[];
  items: Observable<any[]>;

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    console.log(this.firestore);
    this.items = this.firestore.collection('items').valueChanges();
  }

  onClickTestItem(id: number): void {
    this.router.navigateByUrl(`test/${ id }`);
  }
}
