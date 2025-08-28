import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchInputComponent } from './pokemon-search-input.component';

describe('PokemonSearchInputComponent', () => {
  let component: PokemonSearchInputComponent;
  let fixture: ComponentFixture<PokemonSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
