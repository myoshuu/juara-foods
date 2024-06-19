document.addEventListener("DOMContentLoaded", () => {
  const menus = {
    "indonesia-btn": "indonesia",
    "drinks-btn": "drinks",
    "japanese-btn": "japanese",
  };

  const buttons = Object.keys(menus);

  buttons.forEach((btnId) => {
    document.getElementById(btnId).addEventListener("click", () => {
      buttons.forEach((id) => {
        const menu = document.getElementById(menus[id]);
        const button = document.getElementById(id);

        if (id === btnId) {
          menu.classList.remove("hidden");
          button.classList.add("bg-primary", "text-white", "border-primary");
          button.classList.remove("bg-white", "text-primary-slate-500");
          if (id === "indonesia-btn") button.classList.add("border-2");
        } else {
          menu.classList.add("hidden");
          button.classList.remove("bg-primary", "text-white", "border-primary");
          button.classList.add("bg-white", "text-primary-slate-500");
        }
      });
    });
  });
});
