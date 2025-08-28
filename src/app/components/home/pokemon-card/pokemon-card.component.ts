import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Pokemon } from '../../../api/models/pokemon-model';
import { PokemonTypeBadgeComponent } from '../../shared/basic-button/pokemon-type-badge/pokemon-type-badge.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [NgClass, PokemonTypeBadgeComponent],
  standalone: true,
})
export class PokemonCardComponent implements OnInit, OnChanges {
  @Input() pokemon: Pokemon | null = null;
  @Output() selectPokemonEvent = new EventEmitter<boolean>();
  pokemonSprite = '';
  isPokemonSelected = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  ngOnChanges() {
    if (this.pokemon) {
      console.log(this.pokemon.sprites.front_default);
      this.pokemonSprite = this.pokemon.sprites.front_default;
    }
  }

  selectPokemon() {
    this.isPokemonSelected = !this.isPokemonSelected;
    this.selectPokemonEvent.emit(this.isPokemonSelected);
  }
}
