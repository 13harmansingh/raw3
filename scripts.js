document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Mobile Navigation Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('header nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('open'); // Toggle a class for the icon (optional styling)
    });

    navMenu.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('open');
        }
    });

    // Cocktail Modal
    const cocktailItems = document.querySelectorAll('.cocktail-item');
    const modal = document.createElement('div');
    modal.classList.add('cocktail-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">×</span>
            <h3></h3>
            <img src="" alt="Cocktail Image">
            <p class="description"></p>
            <h4>Ingredients</h4>
            <ul class="ingredients"></ul>
            <h4>Preparation</h4>
            <p class="recipe"></p>
        </div>`;
    document.body.appendChild(modal);

    const cocktailData = {
        "The Sunset Squeeze": {
            description: "A vibrant and refreshing cocktail, perfect for watching the sun go down.",
            image: "cocktail1.jpg", // Replace with your image URL
            ingredients: ["2 oz Vodka", "1 oz Fresh Orange Juice", "1 oz Fresh Grapefruit Juice", "0.5 oz Fresh Lime Juice", "Splash of Grenadine", "Orange slice for garnish"],
            recipe: "Combine all ingredients except grenadine in a shaker with ice. Shake well until chilled. Strain into a chilled coupe or martini glass. Add a splash of grenadine, allowing it to settle to the bottom. Garnish with an orange slice."
        },
        "The Rooftop Raw": {
            description: "Our signature cocktail, a tropical escape in a glass.",
            image: "cocktail2.jpg", // Replace with your image URL
            ingredients: ["1.5 oz White Rum", "2 oz Pineapple Juice", "1 oz Cream of Coconut", "0.75 oz Fresh Lime Juice", "Pinch of Nutmeg", "Pineapple wedge and nutmeg for garnish"],
            recipe: "Combine all ingredients except nutmeg in a shaker with ice. Shake vigorously until well-chilled. Double strain into a hurricane glass or tiki mug filled with ice. Grate a pinch of nutmeg over the top. Garnish with a pineapple wedge."
        },
        "The Lisbon Breeze": {
            description: "A light and herbaceous cocktail, capturing the essence of Lisbon.",
            image: "cocktail3.jpg", // Replace with your image URL
            ingredients: ["2 oz Gin", "1 oz Elderflower Liqueur", "0.75 oz Cucumber Juice", "0.5 oz Fresh Lime Juice", "6-8 Mint Leaves", "Cucumber ribbon and mint sprig for garnish"],
            recipe: "Muddle cucumber slices and mint leaves gently in a shaker. Add gin, elderflower liqueur, cucumber juice, and lime juice. Fill the shaker with ice and shake well until chilled. Double strain into a chilled coupe or Nick & Nora glass. Garnish with a cucumber ribbon and a mint sprig."
        },
        "Passionfruit Mojito": {
            description: "A tropical twist on the classic mojito, bursting with passionfruit flavor.",
            image: "cocktail4.jpg", // Replace with your image URL
            ingredients: ["2 oz White Rum", "1 oz Passionfruit Puree", "0.75 oz Fresh Lime Juice", "1 oz Simple Syrup", "8-10 Mint Leaves", "Soda Water", "Passionfruit half and mint sprig for garnish"],
            recipe: "Muddle mint leaves, simple syrup, and lime juice in a sturdy glass. Add rum and passionfruit puree. Fill the glass with crushed ice. Top with soda water. Stir gently. Garnish with a passionfruit half and a mint sprig."
        },
        "Classic Martini": {
            description: "A timeless and elegant cocktail, perfect for any occasion.",
            image: "cocktail5.jpg", // Replace with your image URL
            ingredients: ["2.5 oz Gin or Vodka", "0.5 oz Dry Vermouth", "Olive or Lemon Twist for garnish"],
            recipe: "Fill a mixing glass with ice. Add gin (or vodka) and vermouth. Stir gently for about 30 seconds until well-chilled. Strain into a chilled martini glass. Garnish with an olive (for a dirty martini) or a lemon twist."
        },
        "Strawberry Daiquiri": {
            description: "A sweet and refreshing rum cocktail, perfect for a warm day.",
            image: "cocktail6.jpg", // Replace with your image URL
            ingredients: ["2 oz White Rum", "1 oz Fresh Lime Juice", "0.75 oz Simple Syrup", "6-8 Fresh Strawberries", "Strawberry for garnish"],
            recipe: "Combine all ingredients in a blender with ice. Blend until smooth. Pour into a chilled coupe or daiquiri glass. Garnish with a fresh strawberry."
        },
        // ... add more cocktails here
    };


    cocktailItems.forEach(item => {
        item.addEventListener("click", () => {
            const name = item.querySelector("h3").textContent;
            const cocktail = cocktailData[name]; // Get data for clicked cocktail

            if (cocktail) { // Check if data exists
                modal.querySelector("h3").textContent = name;
                modal.querySelector(".description").textContent = cocktail.description;
                modal.querySelector("img").src = cocktail.image;

                const ingredientsList = modal.querySelector(".ingredients");
                ingredientsList.innerHTML = "";
                cocktail.ingredients.forEach(ingredient => {
                    const li = document.createElement("li");
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });

                modal.querySelector(".recipe").textContent = cocktail.recipe;
                modal.classList.add("show");
            } else {
                console.error("Cocktail data not found for:", name);
                // Handle the error (e.g., display a message in the modal)
                modal.querySelector(".recipe").textContent = "Recipe not found."; // Example error handling
                modal.classList.add("show");
            }
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains("close-btn")) {
            modal.classList.remove("show");
        }
    });

    // Scroll Animation
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: Stop observing once animated
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

