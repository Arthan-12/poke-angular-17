import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { first, finalize, Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon-model';
import { ErrorService } from '../error/error.service';
import { PokemonStoreService } from '../../../stores/pokemon/pokemon-store.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient,
    private pokemonStore: PokemonStoreService,
    private errorService: ErrorService
  ) {}

  private getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return this.http.get<any>(this.API_URL + '/' + pokemonName);
  }

  public searchPokemon(pokemonName: string) {
    this.pokemonStore.setPokemonSearchLoadingState(true);
    this.getPokemonByName(pokemonName)
      .pipe(
        first(),
        finalize(() => {
          this.pokemonStore.setPokemonSearchLoadingState(false);
        })
      )
      .subscribe({
        next: (res) => {
          const pokemon: Pokemon = {
            name: res.name,
            id: res.id,
            height: res.height,
            weight: res.weight,
            order: res.order,
            sprites: res.sprites,
            stats: res.stats,
            types: res.types,
          };
          this.pokemonStore.setPokemon(pokemon);
        },
        error: (e: HttpErrorResponse) =>
          this.errorService.setErrorStatus(e.status),
      });
  }
}
