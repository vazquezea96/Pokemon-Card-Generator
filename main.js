const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
    // Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id)
    // combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    // Fetch generated URL
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        generateCard(data);
    });
};

//Generate Card

let generateCard = (data) => {
    // Get necessary data and assign it to variables
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;

    const pokeName = data.name[0].toUpperCase()
     + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const stateSpeed = data.stats[5].base_stat;
    // append data types to card
    card.innerHTML = `
    <p class="hp">
        <span>HP</span>
        ${hp}
    </p>
    <img src=${imgSrc} />
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types">
        
    </div>
    <div class="stats">
        <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
        </div>
        <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
        </div>
            <div>
                <h3>${stateSpeed}</h3>
                <p>Speed</p>
            </div>
    </div>
    `;
    appendTypes(data.types);
};
let appendTypes = (types) => {
    console.log(types);
    types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
    });  
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData)

