document.addEventListener("DOMContentLoaded", () => {
  const menus = {
    "indonesia-btn": "indonesia",
    "drinks-btn": "drinks",
    "japanese-btn": "japanese",
  };

  const buttons = Object.keys(menus);
  const allMenus = Object.values(menus);

  buttons.forEach((btnId) => {
    document.getElementById(btnId).addEventListener("click", () => {
      buttons.forEach((id) => {
        const menu = document.getElementById(menus[id]);
        const button = document.getElementById(id);

        if (id === btnId) {
          menu.classList.remove("hidden");
          button.classList.add(
            "bg-primary",
            "text-white",
            "border-primary",
            "shadow-xl"
          );
          button.classList.remove("bg-white", "text-primary-slate-500");
        } else {
          menu.classList.add("hidden");
          button.classList.remove(
            "bg-primary",
            "text-white",
            "border-primary",
            "shadow-xl"
          );
          button.classList.add("bg-white", "text-primary-slate-500");
        }
      });

      document
        .getElementById("view-all-btn")
        .classList.remove(
          "bg-primary",
          "text-white",
          "border-primary",
          "shadow-xl"
        );
      document
        .getElementById("view-all-btn")
        .classList.add("bg-white", "text-primary-slate-500");

      if (btnId !== "indonesia-btn") {
        document
          .getElementById("indonesia-btn")
          .classList.remove("border-primary", "shadow-xl");
      } else {
        document
          .getElementById("indonesia-btn")
          .classList.add("border-primary", "shadow-xl");
      }
    });
  });

  document.getElementById("view-all-btn").addEventListener("click", () => {
    allMenus.forEach((menuId) => {
      const menu = document.getElementById(menuId);
      menu.classList.remove("hidden");
    });

    buttons.forEach((btnId) => {
      const button = document.getElementById(btnId);
      button.classList.remove(
        "bg-primary",
        "text-white",
        "border-primary",
        "shadow-xl"
      );
      button.classList.add("bg-white", "text-primary-slate-500");
    });

    const viewAllBtn = document.getElementById("view-all-btn");
    viewAllBtn.classList.add(
      "bg-primary",
      "text-white",
      "border-primary",
      "shadow-xl"
    );
    viewAllBtn.classList.remove("bg-white", "text-primary-slate-500");
  });
});
