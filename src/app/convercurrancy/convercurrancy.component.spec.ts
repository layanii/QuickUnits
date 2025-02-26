import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvercurrancyComponent } from './convercurrancy.component';

describe('ConvercurrancyComponent', () => {
  let component: ConvercurrancyComponent;
  let fixture: ComponentFixture<ConvercurrancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvercurrancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvercurrancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
