import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonSearchService {
  // Führt die Suchanfragen auf der Basis der Eingaben der Nutzer aus.
  // Kann Suchergebnisse paginieren, um die Leistung zu optimieren und die Nutzerfreundlichkeit zu verbessern.
  // Sollte in der Lage sein, Suchparameter zu speichern und bei Bedarf die letzte Suche zu reproduzieren.
  // Könnte auch eine Autocomplete-Funktion bereitstellen, um Nutzer bei der Eingabe von Pokémon-Namen zu unterstützen.
  constructor() { }
}
