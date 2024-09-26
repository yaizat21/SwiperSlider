import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-custom-swiper',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './custom-swiper.component.html',
  styleUrl: './custom-swiper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSwiperComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      pagination: true,
      navigation: {
        enabled: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();

  }

}

