const loadAllFoods = async (firstLetter) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`,
    );
    const data = await response.json();

    // if different character is present
    if (data.meals == "no data found") {
      displayFood([]);
    } else {
      displayFood(data.meals);
    }
  } catch (err) {
    console.log("the error message is:", err);
  }
};

const showItem = () => {
  // console.log("clicked !!");

  const letter = document.getElementById("input-field");
  const value = letter.value;

  // to load food api
  loadAllFoods(value);

  // to empty input field
  document.getElementById("input-field").value = "";

  // to empty card container
  document.getElementById("food-items-container").innerHTML = "";

  // to refresh card detail info
  document.getElementById("card-details-container").innerHTML = "";
};

const displayFood = (items) => {
  const cardContainer = document.getElementById("food-items-container");

  if (!items || items.length === 0) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h1>items not found !</h1>
    `;
    cardContainer.appendChild(div);
  } else {
    items.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
    <img src="${item.strMealThumb}" alt="">
    <h2>${item.strMeal}</h2>
  `;

      cardContainer.appendChild(div);
    });
  }

  const allCards = document.getElementsByClassName("card");
  for (const card of allCards) {
    // console.log(card);
    card.addEventListener("click", (e) => {
      const itemName = e.target.innerText;
      loadCardDetail(itemName);

      // to refresh card detail info
      document.getElementById("card-details-container").innerHTML = "";
    });
  }
};

const loadCardDetail = async (name) => {
  // console.log(name);

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    );
    const data = await response.json();

    showCardDetail(data.meals[0]);
  } catch (err) {
    console.log(err);
  }
};

const showCardDetail = (card) => {
  const cardDetailsContainer = document.getElementById(
    "card-details-container",
  );

  const div = document.createElement("div");
  div.classList.add("card-detail");
  div.innerHTML = `
          <img src="${card.strMealThumb}" alt="">
          <h2>${card.strMeal}</h2>
          <p>Indgredients:</p>
          <p>
            <li>${card.strIngredient1}</li>
            <li>${card.strIngredient2}</li>
            <li>${card.strIngredient3}</li>
            <li>${card.strIngredient4}</li>
            <li>${card.strIngredient5}</li>
          </p>
        `;

  cardDetailsContainer.appendChild(div);
};
