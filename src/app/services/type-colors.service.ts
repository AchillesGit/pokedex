import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeColorsService {

  private typeColors = {
    normal: '#BBBBAA',
    fire: '#FF421C',
    water: '#2C9BE3',
    electric: '#FFDC00',
    grass: '#62BC5A',
    ice: '#74CFC0',
    fighting: '#BB5544',
    poison: '#9553CD',
    ground: '#A67439',
    flying: '#96CAFF',
    psychic: '#FF6380',
    bug: '#92C12A',
    rock: '#BBAA66',
    ghost: '#6E4370',
    dragon: '#5670BE',
    dark: '#4E4545',
    steel: '#AAAABB',
    fairy: '#EC8FE6'
  };


  constructor() { }

  /**
   * Returns the color of the type
   * @param type
   * @returns
   */
  public getTypeColor(type: string): string {
    return this.typeColors[type as keyof typeof this.typeColors];
  }
}
