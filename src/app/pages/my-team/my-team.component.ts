import { Component } from '@angular/core';
import { faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Pokemon } from '../../api/models/pokemon-model';
import { MySquadBoxComponent } from '../../components/my-team/my-squad-box/my-squad-box.component';
import { MyTeamBoxComponent } from '../../components/my-team/my-team-box/my-team-box.component';
import { PokemonStoreService } from '../../stores/pokemon/pokemon-store.service';

@Component({
  selector: 'app-my-team',
  standalone: true,
  imports: [MyTeamBoxComponent, MySquadBoxComponent],
  templateUrl: './my-team.component.html',
})
export class MyTeamComponent {
  subscriptionList: Subscription[] = [];
  capturedPokemonList: Pokemon[] = [];
  pokemonSquadList: Pokemon[] = [];
  faSquarePlus = faSquarePlus;
  faTrash = faTrash;

  constructor(private pokemonStore: PokemonStoreService) {}

  ngOnInit(): void {
    this.getCapturedPokemonList();
    this.getPokemonSquadList();
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((sub) => sub.unsubscribe());
  }

  async getCapturedPokemonList() {
    this.subscriptionList.push(
      await this.pokemonStore.pokemonCapturedList$.subscribe((pokemonList) => {
        this.capturedPokemonList = pokemonList;
      })
    );
  }

  async getPokemonSquadList() {
    this.subscriptionList.push(
      await this.pokemonStore.pokemonSquadList$.subscribe((pokemonList) => {
        this.pokemonSquadList = pokemonList;
      })
    );
  }
}
