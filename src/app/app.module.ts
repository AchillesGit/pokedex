import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonFilterComponent } from './components/pokemon-filter/pokemon-filter.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { PokemonEvolutionComponent } from './components/pokemon-evolution/pokemon-evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonFilterComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonStatsComponent,
    PokemonEvolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
