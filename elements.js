// Custom Elements.JS | By: DevMussab
// Date: 13.01.24
// Version: 1.0.0
// Author: Mussab Qasim | https://github.com/DevMussab

// Element Class | ELEMENT
class ELEMENT extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <h1>1st Element Header</h1>
        <p>This is a paragraph inside the header element.</p>
        <button id="btn">Click Me</button>
        `;

        const btn = this.querySelector('#btn');
        btn.addEventListener('click', () => {
            alert('Button Clicked');
        });
    }
}

// Define the custom element
customElements.define('custom-element', ELEMENT);
