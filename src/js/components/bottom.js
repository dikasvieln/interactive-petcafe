import { addClass, div, footer, text, p } from '../builders';

export default function bottom() {
  const name = p(text('Aulia Dikaa 2022')  );
  const content = addClass(div(name), 'content', 'is-centered');

  const container = addClass(div(content), 'container');

  return addClass(footer(container), 'footer');
}
