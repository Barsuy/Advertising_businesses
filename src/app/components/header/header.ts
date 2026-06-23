import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    isMenuOpen = signal(false); // Signal חדש לתפריט

    
   toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

}
