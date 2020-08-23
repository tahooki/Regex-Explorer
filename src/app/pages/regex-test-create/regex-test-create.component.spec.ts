import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTestCreateComponent } from './regex-test-create.component';

describe('RegexTestCreateComponent', () => {
  let component: RegexTestCreateComponent;
  let fixture: ComponentFixture<RegexTestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexTestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
