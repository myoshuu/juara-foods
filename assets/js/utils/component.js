class CardComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["title", "image", "desc", "rating", "price"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? "<span>★</span>" : "<span>☆</span>";
    }
    return stars;
  }

  render() {
    const title = this.getAttribute("title") || "Title";
    const image = this.getAttribute("image") || "No Image";
    const desc = this.getAttribute("desc") || "Description";
    const rating = parseInt(this.getAttribute("rating")) || 0;
    const price = this.getAttribute("price") || "15.000";

    this.innerHTML = `
    <div class="mx-auto overflow-hidden bg-white border border-gray-200 rounded-2xl max-w-80 min-h-[30rem]">
      <div class="relative">
        <div class="flex items-center justify-center">
          <img src="assets/images/menu/${image}" alt="Soto Banjar" class="w-52 h-52 mt-8">
        </div>
        <button class="absolute p-3 text-gray-500 top-2 right-2">
          <i class="text-2xl fa-regular fa-heart"></i>
        </button>
      </div>
      <div class="p-4">
        <h2 class="text-3xl font-semibold">${title}</h2>
        <p class="text-xl text-gray-600">Rp. ${price}</p>
        <p class="mt-2 text-gray-500">${desc}</p>
        <div class="flex items-center mt-2">
          <div class="flex space-x-1 text-xl text-yellow-400">    
            ${this.generateStars(rating)}
          </div>
        </div>
        <button class="w-full py-2 mt-4 text-black bg-white border border-gray-300 rounded-full">BELI SEKARANG</button>
      </div>
    </div>
        `;
  }
}

customElements.define("card-component", CardComponent);
