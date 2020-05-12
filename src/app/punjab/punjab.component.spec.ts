import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabComponent } from './punjab.component';

describe('PunjabComponent', () => {
  let component: PunjabComponent;
  let fixture: ComponentFixture<PunjabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunjabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
