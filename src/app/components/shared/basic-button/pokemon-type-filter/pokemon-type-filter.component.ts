import { SelectionModel } from '@angular/cdk/collections';
import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonTypeBadgeComponent } from '../pokemon-type-badge/pokemon-type-badge.component';

@Component({
  selector: 'app-pokemon-type-filter',
  templateUrl: './pokemon-type-filter.component.html',
  styleUrls: ['./pokemon-type-filter.component.scss'],
  standalone: true,
  imports: [PokemonTypeBadgeComponent, NgClass],
})
export class PokemonTypeFilterComponent implements OnInit {
  @Output() selectedTypeList = new EventEmitter<string[]>();
  selectedValues = new SelectionModel<string>(true, []);
  isFilterOpenend = false;
  pokemonTypes = [
    'normal',
    'fire',
    'water',
    'grass',
    'flying',
    'fighting',
    'poison',
    'electric',
    'ground',
    'rock',
    'psychic',
    'ice',
    'bug',
    'ghost',
    'steel',
    'dragon',
    'dark',
    'fairy',
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleType(type: string) {
    this.selectedValues.toggle(type);
    this.selectedTypeList.emit(this.selectedValues.selected);
  }
}
