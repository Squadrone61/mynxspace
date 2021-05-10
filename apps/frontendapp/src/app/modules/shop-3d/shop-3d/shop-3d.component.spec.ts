import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop3dComponent } from './shop-3d.component';

describe('Shop3dComponent', () => {
  let component: Shop3dComponent;
  let fixture: ComponentFixture<Shop3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shop3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
