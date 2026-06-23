import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  title = 'Advertising_businesses';
  isVideoPlaying = signal(false);

  startVideo(video: HTMLVideoElement) {
    this.isVideoPlaying.set(true);
    video.play(); // חשוב במיוחד אחרי refresh
  }

  // דוגמה לנתונים עבור הקטגוריות (האייקונים הכחולים)
  categories = signal([
    { name: 'מסעדות', image: 'assets/categories/restaurants.png' },
    { name: 'חנויות תכשיטים', image: 'assets/categories/diamond.png' },
    { name: 'חנויות נעליים', image: 'assets/categories/shoes.png' },
    { name: 'חנויות בגדים', image: 'assets/categories/clothing.png' },
    { name: 'קצביות', image: 'assets/categories/meat.png' },
    { name: 'אולמות תצוגה', image: 'assets/categories/showrooms.png' },
    { name: 'תצוגת מכוניות ', image: 'assets/categories/cars.png' }
  ]);
}
