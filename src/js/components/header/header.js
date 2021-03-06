import headerTemplate from '../../templates/header.hbs';

const headerContainer = document.getElementById('header-hbs');

/* logic with nav links */
let navigationLinks = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/products',
    label: 'Products',
  },
  {
    url: '/about',
    label: 'About-Us',
  },
  {
    url: '/contact',
    label: 'Contacts',
  },
];

navigationLinks = navigationLinks.map((navigationItem) => {
  const item = navigationItem;

  item.isActive = (window.location.pathname === navigationItem.url);

  return item;
});

if (headerContainer) {
  headerContainer.innerHTML = headerTemplate({ navigationLinks });
}
