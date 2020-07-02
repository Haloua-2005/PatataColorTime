import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailqComponent } from './detailq.component';

describe('DetailqComponent', () => {
  let component: DetailqComponent;
  let fixture: ComponentFixture<DetailqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
