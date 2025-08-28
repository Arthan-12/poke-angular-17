import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pokemon } from '../../../api/models/pokemon-model';
import { PokemonStoreService } from '../../../stores/pokemon/pokemon-store.service';
import { BasicButtonComponent } from '../../shared/basic-button/basic-button.component';
import { PokemonSearchInputComponent } from '../../shared/basic-button/pokemon-search-input/pokemon-search-input.component';
import { PokemonTypeFilterComponent } from '../../shared/basic-button/pokemon-type-filter/pokemon-type-filter.component';

@Component({
  selector: 'app-my-team-box',
  templateUrl: './my-team-box.component.html',
  styleUrls: ['./my-team-box.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    BasicButtonComponent,
    PokemonTypeFilterComponent,
    PokemonSearchInputComponent,
  ],
})
export class MyTeamBoxComponent implements OnInit, OnChanges {
  @Input() capturedPokemonList: Pokemon[] = [];
  @Input() pokemonSquadList: Pokemon[] = [];
  selectedPokemonIndex: number | null = null;
  filteredPokemonList: Pokemon[] = [];
  inputValue = '';
  filteredTypeList: string[] = [];

  constructor(private pokemonStore: PokemonStoreService) {}

  ngOnInit(): void {
    // this.getPokemonFilteredList();
  }

  ngOnChanges() {
    this.getPokemonFilteredList();
  }

  getPokemonFilteredList() {
    if (
      this.filterPokemonByType().length === 0 &&
      this.filterPokemonByInput().length === 0
    ) {
      this.filteredPokemonList = this.capturedPokemonList;
    }
  }

  selectPokemon(pokemon: Pokemon, index: number) {
    if (this.selectedPokemonIndex === index) {
      this.selectedPokemonIndex = null;
    } else {
      this.selectedPokemonIndex = index;
    }
    console.log(this.pokemonSquadList);
  }

  addPokemonToSquad(pokemon: Pokemon) {
    this.pokemonStore.setPokemonToSquad(pokemon);
    this.disabledSelectedPokemon(pokemon);
  }

  releasePokemon(pokemon: Pokemon) {
    this.pokemonStore.releasePokemon(pokemon);
  }

  releaseAllCapturedPokemon() {
    this.pokemonStore.clearCapturedPokemonList();
    this.pokemonStore.clearAllPokemonSquad();
  }

  getTypedValue(inputValue: string) {
    this.inputValue = inputValue;
    this.filterPokemonByInput();
  }

  getInputReset(isInputReset: boolean) {
    if (isInputReset) {
      this.inputValue = '';
      this.filterPokemonByInput();
    }
  }

  getKeyboardEvent(keyBoardKey: string) {
    if (
      (keyBoardKey === 'Backspace' || keyBoardKey === 'Delete') &&
      this.inputValue.length === 1
    ) {
      this.inputValue = '';
      this.filterPokemonByInput();
    }
  }

  filterPokemonByInput() {
    let filteredPokemonList: Pokemon[] = [];
    filteredPokemonList = this.capturedPokemonList.filter(
      (pokemon) =>
        pokemon.id!.toString().includes(this.inputValue.toLowerCase()) ||
        pokemon.name!.toLowerCase().includes(this.inputValue.toLowerCase())
    );
    return filteredPokemonList;
  }

  filterPokemonByType() {
    let pokemonTypeList: string[] = [];
    let filteredPokemonList: Pokemon[] = [];
    this.capturedPokemonList.forEach((pokemon) => {
      pokemon.types!.forEach(
        (type) => (pokemonTypeList = [...pokemonTypeList, type.type.name])
      );
    });
    this.filteredTypeList.forEach(
      (type) =>
        (filteredPokemonList = this.capturedPokemonList.filter((pokemon) =>
          pokemon.types?.some((t) => t.type.name === type)
        ))
    );
    return filteredPokemonList;
  }

  disabledSelectedPokemon(pokemon: Pokemon) {
    return this.pokemonSquadList.some((p) => p.id === pokemon.id)
      ? true
      : false;
  }

  getFilteredTypes(filteredTypeList: string[]) {
    this.filteredTypeList = filteredTypeList;
  }

  showPokemonByFilteredType(pokemon: Pokemon) {
    let hidePokemon = false;
    if (this.filteredTypeList.length > 0) {
      pokemon.types?.forEach((t) => {
        if (!this.filteredTypeList.includes(t.type.name)) {
          hidePokemon = true;
        } else {
          hidePokemon = false;
        }
      });
    }
    return hidePokemon;
  }
}
