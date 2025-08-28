import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballPlaceholderComponent } from './pokeball-placeholder.component';

describe('PokeballPlaceholderComponent', () => {
  let component: PokeballPlaceholderComponent;
  let fixture: ComponentFixture<PokeballPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeballPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeballPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
