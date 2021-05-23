import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCameraComponent } from './shop-camera.component';

describe('ShopCameraComponent', () => {
  let component: ShopCameraComponent;
  let fixture: ComponentFixture<ShopCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
