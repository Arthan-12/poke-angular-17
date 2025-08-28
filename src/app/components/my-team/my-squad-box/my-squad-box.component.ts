import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { PokemonStoreService } from '../../../stores/pokemon/pokemon-store.service';
import { Pokemon } from '../../../api/models/pokemon-model';
import { NgClass } from '@angular/common';
import { PokemonTypeBadgeComponent } from '../../shared/basic-button/pokemon-type-badge/pokemon-type-badge.component';
import { BasicButtonComponent } from '../../shared/basic-button/basic-button.component';

@Component({
  selector: 'app-my-squad-box',
  templateUrl: './my-squad-box.component.html',
  styleUrls: ['./my-squad-box.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    PokemonTypeBadgeComponent,
    BasicButtonComponent,
    DragDropModule,
  ],
})
export class MySquadBoxComponent implements OnInit {
  @Input() pokemonSquadList: Pokemon[] = [];
  selectedPokemonIndex: number | null = null;

  constructor(private pokemonStore: PokemonStoreService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Pokemon[]>) {
    moveItemInArray(
      this.pokemonSquadList,
      event.previousIndex,
      event.currentIndex
    );
  }

  clearPokemonFromSquad(pokemon: Pokemon) {
    this.pokemonStore.clearPokemonFromSquad(pokemon);
  }

  clearAllPokemonSquad() {
    this.pokemonStore.clearAllPokemonSquad();
  }
}
