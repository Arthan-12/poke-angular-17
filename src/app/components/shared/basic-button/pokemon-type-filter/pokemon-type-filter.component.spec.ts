import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeFilterComponent } from './pokemon-type-filter.component';

describe('PokemonTypeFilterComponent', () => {
  let component: PokemonTypeFilterComponent;
  let fixture: ComponentFixture<PokemonTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTypeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
