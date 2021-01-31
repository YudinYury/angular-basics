import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistComponent } from './pist.component';

describe('PistComponent', () => {
  let component: PistComponent;
  let fixture: ComponentFixture<PistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
