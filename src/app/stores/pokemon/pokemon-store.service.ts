import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../api/models/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonStoreService {
  private pokemonSubject: BehaviorSubject<Pokemon | null>;
  private pokemonSearchLoadingSubject: BehaviorSubject<boolean>;
  private pokemonCapturedListSubject: BehaviorSubject<Pokemon[]>;
  private pokemonSquadListSubject: BehaviorSubject<Pokemon[]>;

  constructor() {
    this.pokemonSubject = new BehaviorSubject<Pokemon | null>(null);
    this.pokemonSearchLoadingSubject = new BehaviorSubject<boolean>(false);
    this.pokemonCapturedListSubject = new BehaviorSubject<Pokemon[]>([]);
    this.pokemonSquadListSubject = new BehaviorSubject<Pokemon[]>([]);
  }

  get pokemon$() {
    return this.pokemonSubject.asObservable();
  }

  get pokemonSearchLoading$() {
    return this.pokemonSearchLoadingSubject.asObservable();
  }

  get pokemonCapturedList$() {
    return this.pokemonCapturedListSubject.asObservable();
  }

  get pokemonSquadList$() {
    return this.pokemonSquadListSubject.asObservable();
  }

  setPokemon(pokemon: Pokemon | null) {
    this.pokemonSubject.next(pokemon);
  }

  setPokemonSearchLoadingState(loadingState: boolean) {
    this.pokemonSearchLoadingSubject.next(loadingState);
  }

  setPokemonToCapturedList(pokemon: Pokemon) {
    const pokemonCapturedList: Pokemon[] = [
      ...this.pokemonCapturedListSubject.value,
      pokemon,
    ];
    this.pokemonCapturedListSubject.next(pokemonCapturedList);
  }

  setPokemonToSquad(pokemon: Pokemon) {
    const pokemonSquadList: Pokemon[] = [
      ...this.pokemonSquadListSubject.value,
      pokemon,
    ];
    this.pokemonSquadListSubject.next(pokemonSquadList);
  }

  releasePokemon(releasedPokemon: Pokemon) {
    const pokemonFilteredList: Pokemon[] =
      this.pokemonCapturedListSubject.value.filter(
        (pokemon) => pokemon.id !== releasedPokemon.id
      );
    this.pokemonCapturedListSubject.next(pokemonFilteredList);
  }

  clearPokemonFromSquad(releasedPokemon: Pokemon) {
    const pokemonFilteredList: Pokemon[] =
      this.pokemonSquadListSubject.value.filter(
        (pokemon) => pokemon.id !== releasedPokemon.id
      );
    this.pokemonSquadListSubject.next(pokemonFilteredList);
  }

  clearCapturedPokemonList() {
    this.pokemonCapturedListSubject.next([]);
  }

  clearAllPokemonSquad() {
    this.pokemonSquadListSubject.next([]);
  }
}
