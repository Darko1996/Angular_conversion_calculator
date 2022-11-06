import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedConverterComponent } from './shared-converter.component';

describe('SharedConverterComponent', () => {
  let component: SharedConverterComponent;
  let fixture: ComponentFixture<SharedConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
