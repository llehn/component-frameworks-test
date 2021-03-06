(function () {
'use strict';

if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

class EmptyComponent extends HTMLElement {

  constructor() {
    super();
    this.styles = ':host { border: 1px solid red; padding: 0.5em; }';
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render(this.getAttribute('text'));
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'text') {
      this.render(newValue);
    }
  }

  render(text) {
    this.shadowRoot.innerHTML = `<style>${this.styles}</style>${text}`;
  }
}

customElements.define('vanilla-empty', EmptyComponent);

}());
