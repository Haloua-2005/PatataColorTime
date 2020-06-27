import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PATATAColorTimeComponent } from './patata-color-time.component';

describe('PATATAColorTimeComponent', () => {
  let component: PATATAColorTimeComponent;
  let fixture: ComponentFixture<PATATAColorTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PATATAColorTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PATATAColorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
