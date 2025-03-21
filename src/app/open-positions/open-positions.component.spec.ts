import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPositionsComponent } from './open-positions.component';

describe('OpenPositionsComponent', () => {
  let component: OpenPositionsComponent;
  let fixture: ComponentFixture<OpenPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPositionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
