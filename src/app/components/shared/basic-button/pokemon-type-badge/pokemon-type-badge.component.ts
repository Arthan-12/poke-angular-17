import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-badge',
  templateUrl: './pokemon-type-badge.component.html',
  styleUrls: ['./pokemon-type-badge.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class PokemonTypeBadgeComponent implements OnInit {
  @Input() pokemonType = '';
  @Input() size: 'x-small' | 'small' = 'small';
  currentBadgeColor = '';

  constructor() {}

  ngOnInit(): void {
    this.currentBadgeColor = this.pokemonType;
  }
}
