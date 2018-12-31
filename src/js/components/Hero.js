import { addClass, div, img, p, section, text } from '../builders';

export default function hero() {
  const logo = addClass(img('static/logo-fudi.png'), 'logo');
  const the = addClass(p(text('The')), 'hero-text-light');
  const fancyFood = addClass(p(text('Fancy Food')), 'hero-text-bold');
  const eateries = addClass(p(text('Recipes')), 'hero-text-light');

  const container = addClass(div(logo, the, fancyFood, eateries), 'container');

  const heroContent = addClass(div(container), 'hero-content');

  return addClass(section(heroContent), 'hero', 'splash');
}
