import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMessageComponent } from './asset-message.component';

describe('AssetMessageComponent', () => {
  let component: AssetMessageComponent;
  let fixture: ComponentFixture<AssetMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
