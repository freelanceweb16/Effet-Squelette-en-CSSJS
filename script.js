const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelectorAll(".card");

const loadContent = async () => {

    const results = await fetch("https://picsum.photos/v2/list");
    const data = await results.json();
    createCards(data);

}

loadContent();

const createCards = data => {

    let cardsList = '';
    for(element of data){
        const newCard = `
        <div class="card">
            <img src=${element.download_url} class="top-img" />
            <div class="content">
                <h3 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing</h3>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium quas, veniam necessitatibus explicabo accusamus quisquam optio dolorum. Minus, necessitatibus.</p>
                <p class="card-text">Lorem, ipsum dolor</p>
            </div>
        </div>
        `

        cardsList += newCard;
    }

    cardsGrid.innerHTML = cardsList;

}