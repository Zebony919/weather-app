import restaurantImg from "./images/restaurant.avif"

export function loadHomePage() {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const imageContent = document.createElement("section");
    imageContent.className = "image-content";
    const img = document.createElement("img");
    img.src = restaurantImg;
    img.alt = "Restaurant";
    imageContent.appendChild(img);

    const description = document.createElement("section");
    description.className = "description";
    const headline = document.createElement("h2");
    headline.textContent = "Welcome to the Odin restaurant";

    const text = document.createElement("p");
    text.textContent = "Best food in town, no place like Odin";

    description.appendChild(headline);
    description.appendChild(text);

    content.appendChild(imageContent);
    content.appendChild(description);
}