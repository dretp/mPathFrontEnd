import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecmmendationsComponent } from './recmmendations.component';

describe('RecmmendationsComponent', () => {
  let component: RecmmendationsComponent;
  let fixture: ComponentFixture<RecmmendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecmmendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecmmendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
