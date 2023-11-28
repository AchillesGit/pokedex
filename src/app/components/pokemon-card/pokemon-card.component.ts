import { Component, Input, OnInit } from '@angular/core';
import { TypeColorsService } from 'src/app/services/type-colors.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  /**
   * The pokemon to display.
   */
  @Input() pokemon!: Pokemon;

  /**
   * The url of the animated gif of the pokemon.
   */
  public gifUrl: string | null | undefined;

  /**
   * The url of the static image of the pokemon.
   */
  public imgUrl: string | null | undefined;

  /**
   * The types of the pokemon.
   */
  public types: string[] = [];

  /**
   * The background colors for the types of the pokemon.
   */
  public typeColors: string[] = [];

  constructor(private _typeColorService: TypeColorsService) { }

  ngOnInit(): void {
    this.loadTypes();
    this.loadVisuals();
    this.getBackgroundColors();
  }

  /**
   * Load the types of the pokemon.
   */
  private loadTypes(): void {
    this.types = this.pokemon.types.map((type) => type.type.name);
  }

  /**
   * Load the visual representation of the pokemon.
   * If the pokemon has an animated gif, use that.
   * Otherwise, use the static image.
   */
  private loadVisuals(): void {
    this.gifUrl = this.pokemon.sprites.versions['generation-v']['black-white'].animated?.front_default;
    if (!this.gifUrl) {
      this.imgUrl = this.pokemon.sprites.front_default;
    }
  }

  /**
   * Get the background colors for the types of the pokemon.
   */
  private getBackgroundColors() {
    this.types.forEach((type) => {
      this.typeColors.push(this._typeColorService.getTypeColor(type));
    });
  }
}
