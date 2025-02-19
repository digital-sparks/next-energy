import AirDatepicker from 'air-datepicker';
// import localeNl from 'air-datepicker/locale/nl';
// import 'air-datepicker/air-datepicker.css';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('hello');

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

  new AirDatepicker('#geboortedatum', {
    dateFormat: 'dd-MM-yyyy',
    // visible: true,
    maxDate: [new Date()],
    locale: localeNl,
    // inline: true,
  });

  new AirDatepicker('#startdatum', {
    // inline: false,
    // selectedDates: [new Date()],
    dateFormat: 'dd-MM-yyyy',
    // visible: true,
    // container: '#datepicker-wrapper',
    // // position: 'right center',
    minDate: [new Date(new Date().setDate(new Date().getDate() + 20))],
    maxDate: [new Date(new Date(new Date().setDate(1)).setMonth(new Date().getMonth() + 6))],
    locale: localeNl,
  });
});
