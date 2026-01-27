export function loadAboutPage() {
    const content = document.querySelector(".content");
    content.id = "aboutContent";
    content.innerHTML = "";

    const titleOne = document.createElement("h3");
    titleOne.className = "titleOne";
    titleOne.textContent = "About Odin Restaurant"

    const textOne = document.createElement("p");
    textOne.className = "textOne";
    textOne.textContent = `Founded in 2015 by legendary chef Magnus Thorson, Odin Restaurant has become a cornerstone 
        of fine dining in the heart of the city. Our passion for culinary excellence and Norse-inspired 
        cuisine has earned us countless accolades and a loyal following of food enthusiasts.`;

    const titleTwo = document.createElement("h3");
    titleTwo.className = "titleTwo";
    titleTwo.textContent = "Our Philosophy";

    const textTwo = document.createElement("p");
    textTwo.className = "textTwo";
    textTwo.textContent = `We believe that great food brings people together. Every dish we create is a tribute 
        to the ancient traditions of Nordic cuisine, combined with modern culinary innovation. Our chefs use 
        only the freshest locally-sourced ingredients, ensuring every meal is an unforgettable experience.`;

    const titleThree = document.createElement("h3");
    titleThree.className = "titleThree";
    titleThree.textContent = "The Odin Experience";

    const textThree = document.createElement("p");
    textThree.className = "textThree";
    textThree.textContent = `Step into our realm and discover a dining atmosphere unlike any other. With rustic 
        timber interiors, ambient candlelight, and the warmth of our open hearth, Odin Restaurant transports you 
        to the grand halls of Valhalla itself. Whether you're celebrating a special occasion or simply enjoying 
        an evening out, we promise a feast worthy of the gods.`;

    const titleFour = document.createElement("h3");
    titleFour.className = "titleFour";
    titleFour.textContent = "The Odin Experience";

    const textFour = document.createElement("p");
    textFour.className = "textFour";
    textFour.textContent = `At Odin Restaurant, we are committed 
        to sustainability, quality, and exceptional service. From farm to table, we honor every ingredient and 
        every guest who walks through our doors.`;


    const description = document.createElement("section");
    description.className = "description";
    const headline = document.createElement("h2");
    headline.textContent = "Welcome to the Odin restaurant";

    const text = document.createElement("p");
    text.textContent = "Best food in town, no place like Odin";

    description.appendChild(headline);
    description.appendChild(text);

    content.appendChild(titleOne);
    content.appendChild(textOne);
    content.appendChild(titleTwo);
    content.appendChild(textTwo);
    content.appendChild(titleThree);
    content.appendChild(textThree);
    content.appendChild(titleFour);
    content.appendChild(textFour);
    content.appendChild(description)
}