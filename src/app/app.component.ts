import { Component } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CustomSwiperComponent } from './components/custom-swiper/custom-swiper.component';
// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CustomSwiperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ytfotoweb';
 
}
