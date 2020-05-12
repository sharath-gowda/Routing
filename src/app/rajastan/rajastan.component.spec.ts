import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajastanComponent } from './rajastan.component';

describe('RajastanComponent', () => {
  let component: RajastanComponent;
  let fixture: ComponentFixture<RajastanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajastanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajastanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
