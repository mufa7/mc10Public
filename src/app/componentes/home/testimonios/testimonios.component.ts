import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent {

  currentIndex = 0;
  videos: string[] = [
    'assets/videos/testimonio1.mp4',
    'assets/videos/testimonio2.mp4'
  ];
  play: string = 'assets/images/play.png';

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  }
    

}
