class CardComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["title", "image", "desc", "rating", "icon"];
  }

  coonnectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const title = this.getAttribute("title") || "Title";
    const image = this.getAttribute("image") || "";
    const desc = this.getAttribute("desc") || "Description";
    const rating = this.getAttribute("rating") || 0;
    const icon = this.getAttribute("icon") || "";

    this.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="assets/images/${image}" class="card-img-top" alt="${image}">
        <div class="card-body">
          <h4 class="card-title fw-semibold">${title}</h4>
          <p class="card-text">${desc}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("card-component", CardComponent);
