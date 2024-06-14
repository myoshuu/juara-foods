class MenuCard {
  constructor(title, image, desc) {
    this.title = title;
    this.image = image;
    // this.price = price;
    this.desc = desc;
    // this.icon = icon;
    // this.rating = rating;
  }

  render(container) {
    if (container instanceof HTMLElement) {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <img src="${this.image}" class="card-img-top w-75" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <p class="card-text">${this.desc}</p>
      </div>
      `;

      container.appendChild(card);
    } else console.error("Invalid container element");
  }
}
