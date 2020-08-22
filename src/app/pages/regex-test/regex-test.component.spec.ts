import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTestComponent } from './regex-test.component';

describe('RegexTestComponent', () => {
  let component: RegexTestComponent;
  let fixture: ComponentFixture<RegexTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
