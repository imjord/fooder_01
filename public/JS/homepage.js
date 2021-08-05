setTimeout(() => {
    const restaurantsData = ["1", "1", "1", "1", "1", "1", "1", "1", "1",];

    const initialCard = document.getElementById("card-0");
    
    console.log("hello", initialCard);
    initialCard.classList.remove("hidden");
    initialCard.classList.add("shown");
    
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
        });
    
        noButton.addEventListener('click', () => {
            if (index === 0) {
                const lastCard = document.getElementById("card-8");
                lastCard.classList.remove("hidden");
                lastCard.classList.add("shown");
                currentCard.classList.remove("shown");
                currentCard.classList.add("hidden");
            } else {
                const nextCard = document.getElementById(`card-${index - 1}`);
                nextCard.classList.remove("hidden");
                nextCard.classList.add("shown");
                currentCard.classList.remove("shown");
                currentCard.classList.add("hidden");
            }
        });
    });
}, 50)
