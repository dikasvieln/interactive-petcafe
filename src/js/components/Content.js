import { addClass, div, img, p, section } from '../builders'

export default function content(productData = {}) {

    const icon = addClass(img(), 'icon-product')
    const desc = addClass(p(text('test product')), 'product-desc')

    // result Content
    const Wrapper = addClass(div(container), 'wrap-content')

    return addClass(section(Wrapper))
}