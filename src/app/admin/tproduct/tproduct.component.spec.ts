import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TproductComponent } from './tproduct.component';

describe('TproductComponent', () => {
  let component: TproductComponent;
  let fixture: ComponentFixture<TproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
