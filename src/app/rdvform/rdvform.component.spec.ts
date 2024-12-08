import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvformComponent } from './rdvform.component';

describe('RdvformComponent', () => {
  let component: RdvformComponent;
  let fixture: ComponentFixture<RdvformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
