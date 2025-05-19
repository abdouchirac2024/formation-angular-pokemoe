import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  name=signal('Abdou');
  life=signal(30);

  size = computed(() => {
    if (this.life() < 25) {
      return 'petit';
    } else {
      return 'grand';
    }
  });

  imageSrc =signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png')

  incrementLife(){
    this.life.update((life)=> life + 1);
  }

  decrementLife(){
    this.life.update((life) => life - 1);
  }
}
