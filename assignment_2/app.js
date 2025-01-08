const loadDrinksData = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cock",
    );
    const data = await response.json();

    displayDrinksData(data.drinks);
  } catch (err) {
    console.log(err);
  }
};

const displayDrinksData = (items) => {
  const container = document.getElementById("card-container");

  if (!items || items.length === 0) {
    const notFoundDiv = document.createElement("div");
    notFoundDiv.innerHTML = `
      <h1>items not found !</h1>
    `;

    container.appendChild(notFoundDiv);
  } else {
    items.forEach((item) => {
      console.log(item);
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
      <img class="card-img" src="${item.strDrinkThumb}" alt="">
      <h3>${item.strDrink}</h3>
      <h5>${item.strCategory}</h5>
      <p>${item.strInstructions.slice(0, 20)}</p>
      <div class="card-btn">
        <button 
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        onclick="handleDetail('${item.strDrink}', '${item.strDrinkThumb}', '${item.strCategory}', '${item.strAlcoholic}', '${item.strInstructions}')"
        >Details</button>
        <button 
        class="btn btn-primary"
        onclick="handleAddToGroup('${item.strDrink}')"
        >Add To Group</button>
      </div>
    `;

      container.appendChild(div);
    });
  }
};

const handleSearchBtn = () => {
  const inputFieldValue = document.getElementById("input-field").value;

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputFieldValue}`,
  )
    .then((res) => res.json())
    .then((data) => {
      // checking data proper data fetched or not
      if (data.drinks == "null" || data.drinks == "no data found") {
        displayDrinksData([]);
      } else {
        displayDrinksData(data.drinks);
      }
    });

  // refreshing input field
  document.getElementById("input-field").value = "";

  // refreshing items card container for every search
  document.getElementById("card-container").innerHTML = "";
};

// adding items to the cart
const handleAddToGroup = (name) => {
  // counting cart selected items
  const cartCount = document.getElementById("items-count").innerText;
  let convertedCount = parseInt(cartCount);
  convertedCount += 1;
  if (convertedCount > 7) {
    alert("You can't add more than 7 items !!");
    return;
  } else {
    document.getElementById("items-count").innerText = convertedCount;
  }

  const cartItemsContainer = document.getElementById("cart-items");

  const div = document.createElement("div");
  div.innerHTML = `
    <h5>${name}</h5>
  `;

  cartItemsContainer.appendChild(div);
};

// showing details in the modal
const handleDetail = (title, img, category, type, description) => {
  const modalTitle = document.getElementById("staticBackdropLabel");
  modalTitle.innerText = title;

  const modalBody = document.getElementById("modal-body-div");
  modalBody.innerHTML = `
    <img class="modal-img" src="${img}" alt="">
    <h5>Details</h5>
    <p>Category: <b>${category}</b></p>
    <p>Type: <b>${type}</b></p>
    <p>${description}</p>
  `;
};

// loading default data
loadDrinksData();
