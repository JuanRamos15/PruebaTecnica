// Función para mostrar el modal con habilidad, peso y tamaño
function showModal(index) {
  const pokemonData = pokemonList[index];
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
                <p><strong>Habilidad:</strong> ${pokemonData.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}</p>
                <p><strong>Peso:</strong> ${pokemonData.weight}</p>
                <p><strong>Tamaño:</strong> ${pokemonData.height}</p>
            `;
  $("#myModal").modal("show");
}

// Función para ocultar el modal
$("#myModal").on("hidden.bs.modal", function () {
  // Limpiar el contenido del modal al cerrar
  document.getElementById("modalContent").innerHTML = "";
});
function createCard(pokemonData, index) {
  const cardContainer = document.getElementById("apiCards");

  // Crear la tarjeta (card) con imagen, título y descripción
  const card = document.createElement("div");
  card.className = "card m-2";
  card.style.width = "18rem";
  const html = `
                <img id="pokemonSprite" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${pokemonData.name}</h5>
                    <p class="card-text">${pokemonData.species.name}</p>
                    <button class="btn btn-primary" onclick="showModal(${index})">Mostrar más</button>
                </div>
            `;
  card.innerHTML = html;
  cardContainer.appendChild(card);
}
const pokemonList = [];

// Función para obtener y mostrar información de Pokémon
function getPokemon() {
  const pokemonId = document.getElementById("pokemonId").value;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      pokemonList.push(data);
      createCard(data, pokemonList.length - 1);
    })
    .catch((error) => {
      console.error("Error al obtener información del Pokémon", error);
    });
}
