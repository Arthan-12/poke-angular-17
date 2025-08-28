import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballLoaderComponent } from './pokeball-loader.component';

describe('PokeballLoaderComponent', () => {
  let component: PokeballLoaderComponent;
  let fixture: ComponentFixture<PokeballLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeballLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeballLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
