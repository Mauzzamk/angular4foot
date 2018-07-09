import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddasmodalComponent } from './addasmodal.component';

describe('AddasmodalComponent', () => {
  let component: AddasmodalComponent;
  let fixture: ComponentFixture<AddasmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddasmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddasmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
