import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  /**
   * The list of Pokemon.
   */
  pokemonList: Pokemon[] = [];

  constructor(private pokemonDetailService: PokemonDetailService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getPokemon(1, 151);
  }

  /**
   * Fetches and populates the list of Pokemon.
   */
  private async getPokemon(start: number, end: number): Promise<void> {
    const promises = [];
    for (let i = start; i <= end; i++) {
      promises.push(this.pokemonDetailService.fetchPokemon(i));
    }
    this.pokemonList = await Promise.all(promises);
    console.log(this.pokemonList);
  }
}
