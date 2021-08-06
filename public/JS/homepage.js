setTimeout(() => {
    const restaurantsData = ["1", "1", "1", "1", "1", "1", "1", "1", "1",];

    const initialCard = document.getElementById("card-0");
    
    initialCard.classList.remove("hidden");
    initialCard.classList.add("shown");

    const localStorageUtil = (action, value) => {
        if (action === "set") {
          const liked = JSON.parse(localStorage.getItem("liked") ?? "[]");
          liked.push(value);
          localStorage.setItem("liked", JSON.stringify(liked));
        } else if (action === "get") {
          return JSON.parse(localStorage.getItem("liked") ?? "[]");
        }
    };
    
    restaurantsData.map((item, index) => {
        const yesButton = document.getElementById(`yes-btn-${index}`);
        const noButton = document.getElementById(`no-btn-${index}`);
    
        const currentCard = document.getElementById(`card-${index}`);
    
        yesButton.addEventListener('click', () => {
            if (index === 8) {
                const lastCard = document.getElementById("card-0");
                lastCard.classList.remove("hidden");
                lastCard.classList.add("shown");
                currentCard.classList.remove("shown");
                currentCard.classList.add("hidden");
            } else {
                const nextCard = document.getElementById(`card-${index + 1}`);
                nextCard.classList.remove("hidden");
                nextCard.classList.add("shown");
                currentCard.classList.remove("shown");
                currentCard.classList.add("hidden");
            }
            localStorageUtil("set", index);
        });
    
        noButton.addEventListener('click', () => {
            if (index === 8) {
                const lastCard = document.getElementById("card-0");
                lastCard.classList.remove("hidden");
                lastCard.classList.add("shown");
                currentCard.classList.remove("shown");
                currentCard.classList.add("hidden");
            } else {
                const nextCard = document.getElementById(`card-${index + 1}`);
                nextCard.classList.remove("hidden");
                nextCard.classList.add("shown");
                currentCard.classList.remove("shown");
                currentCard.classList.add("hidden");
            }
        });
    });
}, 50)
