import { div, addId, text } from "../builders";
import navbar from './navbar';

export default function app() {
    const appElem = addId(div(text('Halo dunia')), 'app-container')
    const navbar = navbar();

    return appElem;
}