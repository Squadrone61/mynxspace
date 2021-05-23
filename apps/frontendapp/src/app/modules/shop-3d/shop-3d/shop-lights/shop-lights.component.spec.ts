import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLightsComponent } from './shop-lights.component';

describe('ShopLightsComponent', () => {
  let component: ShopLightsComponent;
  let fixture: ComponentFixture<ShopLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopLightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
