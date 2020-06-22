import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompenentComponent } from './new-compenent.component';

describe('NewCompenentComponent', () => {
  let component: NewCompenentComponent;
  let fixture: ComponentFixture<NewCompenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
