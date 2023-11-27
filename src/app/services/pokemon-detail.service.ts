import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  // Ruft die detaillierten Informationen zu einem spezifischen Pokémon ab, wenn es ausgewählt wird.
  // Könnte Informationen wie Statistiken, Entwicklungen, Fähigkeiten und mehr bereitstellen.
  // Sollte schnell und effizient auf Anfragen reagieren können, um eine sofortige Anzeige von Details zu ermöglichen.
  // Könnte auch Caching-Mechanismen verwenden, um die Leistung zu verbessern und unnötige API-Aufrufe zu vermeiden.

  private pokemonApi = 'https://pokeapi.co/api/v2/pokemon/';

  constructor() { }

  /**
   * Fetches the detailed information of a specific pokemon when it is selected.
   * @param pokemonId The id of the pokemon to fetch.
   * @returns The detailed information of the pokemon.
   */
  public async fetchPokemon(pokemonId: number): Promise<Pokemon> {
    const response = await fetch(this.pokemonApi + pokemonId);

    const data = await response.json();

    const {
      name,
      types,
      id,
      sprites,

    } = data;

    return {
      name,
      types,
      id,
      sprites
    };
  }
}
