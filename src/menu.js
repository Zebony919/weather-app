export function loadMenuPage() {
    const content = document.querySelector(".content");
    content.id = "menuContent";
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.className = "menuTitle";
    title.textContent = "Menu";

    const food = document.createElement("section");
    food.className = "food";

    for (let i = 0; i < 8; i++) {
        const foodItem = document.createElement("div");
        foodItem.className = "foodItem";
        
        const foodName = document.createElement("h2");
        foodName.className = "foodName";
        foodName.textContent = "Something Delicious";

        const foodDescription = document.createElement("p");
        foodDescription.className = "foodDescription";
        foodDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

        foodItem.appendChild(foodName);
        foodItem.appendChild(foodDescription);

        food.appendChild(foodItem);
    }

    const description = document.createElement("section");
    description.className = "description";
    const headline = document.createElement("h2");
    headline.textContent = "Welcome to the Odin restaurant";

    const text = document.createElement("p");
    text.textContent = "Best food in town, no place like Odin";

    description.appendChild(headline);
    description.appendChild(text);

    content.appendChild(title);
    content.appendChild(food);
    content.appendChild(description);
}