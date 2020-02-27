import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:    'app-main',
  templateUrl: './main.component.html',
  styleUrls:   [ './main.component.scss' ]
})
export class MainComponent implements OnInit {

  bestTestList: any[];
  recentTestList: any[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickTestItem(id: number): void {
    this.router.navigateByUrl(`test/${ id }`);
  }
}
