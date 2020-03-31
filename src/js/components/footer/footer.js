import footerTemplate from '../../templates/footer.hbs';

var footerContainer = document.getElementById('footer-hbs');

/* logic with nav links */
var navigationLinks = [];

if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ navigationLinks });
}
