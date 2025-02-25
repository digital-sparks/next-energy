import Swiper from 'swiper';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import AirDatepicker from 'air-datepicker';

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

  // TOGGLE CLASS ON DROPDOWN
  document
    .querySelectorAll('.ef_toggle-dropdown_head')
    .forEach((toggle) =>
      toggle.addEventListener('click', (event) => event.currentTarget.classList.toggle('is-open'))
    );
  // TOGGLE CLASS ON DROPDOWN

  // AIR DATAPICKER
  const localeNl = {
    days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    daysShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    daysMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    months: [
      'Januari',
      'Februari',
      'Maart',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'December',
    ],
    monthsShort: [
      'Jan',
      'Feb',
      'Mrt',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ],
    today: 'Vandaag',
    clear: 'Legen',
    dateFormat: 'dd-MM-yyyy',
    timeFormat: 'HH:mm',
    firstDay: 1,
  };

  const createDatepicker = (selector, options) => {
    const field = document.querySelector(selector);
    new AirDatepicker(field, {
      ...options,
      locale: localeNl,
      dateFormat: 'dd-MM-yyyy',
      onShow: () => field.classList.add('is-active'),
      onHide: () => field.classList.remove('is-active'),
    });
  };

  createDatepicker('#Birthday', {
    maxDate: new Date(),
  });

  createDatepicker('#startdatum', {
    minDate: new Date(new Date().setDate(new Date().getDate() + 20)),
    maxDate: new Date(new Date(new Date().setDate(1)).setMonth(new Date().getMonth() + 6)),
  });
  // AIR DATAPICKER
});

// GENERIC DEBOUNCE FUNCTION
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
