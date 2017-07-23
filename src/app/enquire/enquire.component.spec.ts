import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireComponent } from './enquire.component';

describe('EnquireComponent', () => {
  let component: EnquireComponent;
  let fixture: ComponentFixture<EnquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
