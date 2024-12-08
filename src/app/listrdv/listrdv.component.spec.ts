import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrdvComponent } from './listrdv.component';

describe('ListrdvComponent', () => {
  let component: ListrdvComponent;
  let fixture: ComponentFixture<ListrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListrdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
