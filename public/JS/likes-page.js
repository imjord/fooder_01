setTimeout(() => {
    const localStorageUtil = (action, value) => {
        if (action === "set") {
          const liked = JSON.parse(localStorage.getItem("liked") ?? "[]");
          liked.push(value);
          localStorage.setItem("liked", JSON.stringify(liked));
        } else if (action === "get") {
          return JSON.parse(localStorage.getItem("liked") ?? "[]");
        }
    };
    const likedRestaurants = localStorageUtil("get");
    likedRestaurants.map((item, index) => {
        const card = document.getElementById(`card-${item}`);

        card.classList.remove("hidden");
        card.classList.add("shown");
    })
}, 50)
