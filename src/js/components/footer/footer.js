import footerTemplate from '../../templates/footer.hbs';

var footerContainer = document.getElementById('footer-hbs');

/* logic with nav links */
const navigationLinksFooterPartners = [
  {
    url: 'https://itaxi.md/ru/',
    label: 'iTaxi',
  },
  {
    url: 'https://999.md/ru/',
    label: '999',
  },
  {
    url: 'https://www.facebook.com/',
    label: 'Facebook',
  },
  {
    url: 'https://learn.javascript.ru',
    label: 'Learn JavaScript',
  },
];

const navigationLinksFooterKitchen = [
  {
    url: 'https://foodhouse.md/ru/osho',
    label: 'Osho',
  },
  {
    url: 'http://torrogrill.md/',
    label: 'Torro Grill',
  },
  {
    url: 'https://mipiace.md/',
    label: 'Mipiace',
  },
  {
    url: 'https://gastrobar.odessa.ua/',
    label: 'Gastrobar',
  },
];

const navigationLinksFooterLocation = [
  {
    url: 'https://www.google.com/search?sxsrf=ALeKk024cq9TBfVUf73JzkWIlcw37xyYfg:1585662215994&q=osho&npsic=0&rflfq=1&rlha=0&rllag=47002985,28859168,354&tbm=lcl&ved=2ahUKEwi8v_iI7MToAhUdwsQBHe2uDREQtgN6BAgKEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:;mv:[[47.0061024,28.860159699999997],[46.999869,28.8581766]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9',
    label: 'Osho',
  },
  {
    url: 'https://www.google.com/search?tbm=lcl&sxsrf=ALeKk03sAapRQOoWYaDAukISJObYfGu-yA%3A1585662218831&ei=CkmDXvOzMpKz6ASJsJSwBg&q=Torro+grill&oq=Torro+grill&gs_l=psy-ab.3..35i39k1j0l8j0i203k1.31125.33145.0.33344.11.11.0.0.0.0.133.1058.4j6.10.0..2..0...1c.1.64.psy-ab..1.10.1055...0i67k1j0i131k1j0i131i67k1j0i20i263i395k1j0i131i395k1j0i395k1j0i20i263k1j0i10i395k1j0i10k1.0.BebRyTId8i4#rlfi=hd:;si:11643253934357279455;mv:[[47.0483149,28.8706277],[47.0317894,28.822258299999998]]',
    label: 'TorroGrill',
  },
  {
    url: 'https://www.google.com/maps/place/MiPiace/@46.9987096,28.8577188,15z/data=!4m12!1m6!3m5!1s0x0:0x677e28bd7061dda2!2sMiPiace!8m2!3d46.9987096!4d28.8577188!3m4!1s0x0:0x677e28bd7061dda2!8m2!3d46.9987096!4d28.8577188',
    label: 'Mipiace',
  },
  {
    url: 'https://www.google.com/maps/place/Gastrobar/@46.4853563,30.7381523,15z/data=!4m12!1m6!3m5!1s0x0:0x65b08b549ea6df95!2sGastrobar!8m2!3d46.4858291!4d30.7388389!3m4!1s0x0:0x65b08b549ea6df95!8m2!3d46.4858291!4d30.7388389',
    label: 'GastroBar Odessa',
  },
];

// navigationLinksFooter = navigationLinksFooter.map((navigationItemFooter) => {
//   const item = navigationItemFooter;

//   item.isActive = (window.location.pathname === navigationItemFooter.url);

//   return item;
// });

if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ navigationLinksFooterPartners, navigationLinksFooterKitchen, navigationLinksFooterLocation });
}
