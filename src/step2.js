import Swiper from 'swiper';
import { Scrollbar, Mousewheel } from 'swiper/modules';

window.Webflow ||= [];
window.Webflow.push(() => {
  // OFFER SWIPER CODE
  const BREAKPOINT = 991;
  const DEBOUNCE_DELAY = 50;

  const swiperArgs = {
    modules: [Scrollbar, Mousewheel],
    wrapperClass: 'ef_packages-wrapper',
    slideClass: 'ef_package_component',
    slidesPerView: 'auto',
    speed: 300,
    spaceBetween: 32,
    a11y: true,
    grabCursor: true,
    keyboard: false,
    mousewheel: { forceToAxis: true },
    scrollbar: {
      el: '.ef_packages-scrollbar',
      dragClass: 'ef_packages-scrollbar-drag',
      draggable: true,
    },
    on: {
      beforeInit: (swiper) => {
        swiper.wrapperEl.style.gridColumnGap = 'unset';
      },
    },
  };

  let packageSwiper = null;

  const handleResize = () => {
    const newWindowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (newWindowWidth >= BREAKPOINT) {
      if (!packageSwiper) {
        packageSwiper = new Swiper('.ef_packages-container', swiperArgs);
      } else {
        packageSwiper.update();
      }
    } else if (packageSwiper) {
      packageSwiper.destroy(true, true);
      packageSwiper = null;
    }
  };

  window.addEventListener('resize', debounce(handleResize, DEBOUNCE_DELAY));
  handleResize();
  // OFFER SWIPER CODE
});

// GENERIC DEBOUNCE FUNCTION
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
