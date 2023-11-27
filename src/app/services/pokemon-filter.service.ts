import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonFilterService {
  // Verwaltet die Zustände der verschiedenen Filter (Typ, Generation, Sortierung).
  // Wendet Filter auf die Liste der Pokémon an und gibt gefilterte Ergebnisse zurück.
  // Sollte in der Lage sein, mehrere Filter gleichzeitig zu kombinieren.
  // Bietet eine Schnittstelle für die Filterkomponenten, um ihre Zustände zu aktualisieren und die Ergebnisse entsprechend zu filtern.
  constructor() { }
}
