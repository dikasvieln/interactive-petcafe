// method for a text
export function text(words) {
    return document.createTextNode(words);
}

// method for creating an element 
export function createElement(type, ...children) {
    // creating an element type
    const newElement = document.createElement(type);
    // inserting a new element
    children.forEach(child => {
        newElement.append(child)
    });
}

// method for div 
export function div(...children) {
    return createElement('child', ...children);
}

// method for i
export function i(...children) {
    return createElement('i', ...children);
}

// method for nav
export function nav(...children) {
    return createElement('nav', ...children);
}

// method for span
export function span(...children) {
    return createElement('span', ...children);
}

// method addClass

export function addClass(element, ...klasses) {
    console.log(element, "ada ga")

    const newDom = element.cloneNode(true);
    console.log(newDom, 'checking aja')
    // klasses.forEach(klass => newDom.classList.add(klass));
    return newDom;
}

// method for addId
export function addId(element, id) {
    const newElement = element.cloneNode(true);
    return Object.assign(newElement, { id })
}
