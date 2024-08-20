import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from 'swiper';


// Install the required modules
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwiperModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Ensure this is correct
})
export class HomeComponent  {
  
  configTest: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 50,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop:true,
    
    navigation: true,
    pagination: { clickable: true},
    scrollbar: { draggable: true},
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  }

  dataBrand = ['forbes.png', 'Business-Standard.png', 'cointelegraph.png', 'Entrepreneur.png', 'marketwatch.png'];
}
