import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../../api/models/pokemon-model';
import { ErrorService } from '../../api/services/error/error.service';
import { PokemonService } from '../../api/services/pokemon/pokemon.service';
import { PokemonCardComponent } from '../../components/home/pokemon-card/pokemon-card.component';
import { BasicButtonComponent } from '../../components/shared/basic-button/basic-button.component';
import { NotFoundPlaceholderComponent } from '../../components/shared/basic-button/not-found-placeholder/not-found-placeholder.component';
import { PokeballLoaderComponent } from '../../components/shared/basic-button/pokeball-loader/pokeball-loader.component';
import { PokeballPlaceholderComponent } from '../../components/shared/basic-button/pokeball-placeholder/pokeball-placeholder.component';
import { PokemonSearchInputComponent } from '../../components/shared/basic-button/pokemon-search-input/pokemon-search-input.component';
import { PokemonStoreService } from '../../stores/pokemon/pokemon-store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BasicButtonComponent,
    PokemonSearchInputComponent,
    PokemonCardComponent,
    PokeballPlaceholderComponent,
    NotFoundPlaceholderComponent,
    PokeballLoaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchInputTitle = 'Search for a Pokémon!';
  welcomeText = 'Welcome to Pokenext!';
  searchedPokemon: Pokemon | null = null;
  showNotFoundPlaceholder = false;
  pokemonSearchLoading = false;
  isPokemonSelected = false;
  inputValue = '';
  subscriptionList: Subscription[] = [];

  currentIndex: null | number = null;

  constructor(
    private pokemonService: PokemonService,
    private pokemonStore: PokemonStoreService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getStoredPokemon();
    this.getPokemonSearchLoadingState();
    this.getStatusPlaceholder();
  }

  ngOnDestroy() {
    this.subscriptionList.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  async getStoredPokemon() {
    this.subscriptionList.push(
      this.pokemonStore.pokemon$.subscribe((pokemon) => {
        this.searchedPokemon = pokemon;
        this.showNotFoundPlaceholder = false;
      })
    );
  }

  async getPokemonSearchLoadingState() {
    this.subscriptionList.push(
      this.pokemonStore.pokemonSearchLoading$.subscribe((loading) => {
        this.pokemonSearchLoading = loading;
      })
    );
  }

  async getStatusPlaceholder() {
    this.subscriptionList.push(
      this.errorService.statusPlaceholder$.subscribe((placeholder) => {
        if (placeholder === 'notFound') {
          this.showNotFoundPlaceholder = true;
        } else {
          this.showNotFoundPlaceholder = false;
        }
      })
    );
  }

  getTypedValue(inputValue: string) {
    this.inputValue = inputValue;
  }

  getInputReset(isInputReset: boolean) {
    if (isInputReset) {
      this.pokemonStore.setPokemon(null);
      this.isPokemonSelected = false;
      this.inputValue = '';
    }
  }

  getKeyboardEvent(keyBoardKey: string) {
    if (
      (keyBoardKey === 'Backspace' || keyBoardKey === 'Delete') &&
      this.inputValue.length === 1
    ) {
      this.inputValue = '';
    }
    if (keyBoardKey === 'Enter' && this.inputValue.length > 0) {
      this.searchPokemon();
    }
  }

  searchPokemon() {
    this.pokemonService.searchPokemon(this.inputValue);
  }

  catchPokemon() {
    this.pokemonStore.setPokemonToCapturedList(this.searchedPokemon!);
  }

  selectPokemonEvent(isSelected: boolean) {
    this.isPokemonSelected = isSelected;
    const element: HTMLElement | null = document.getElementById('pokemonCard');
    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }
}
