// const loadAllProduct = () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// loadAllProduct();

const loadAllProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    displayProduct(data);
  } catch (err) {
    console.log(err);
  }
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img class="card-img" src="${product.image}" alt="">
      <h4>${product.title}</h4>
      <p>Price: ${product.price} $</p>
      <p>${product.description.slice(0, 40)}</p>
      <button onclick="singleProduct('${product.id}')">Details</button>
      <button onclick="handleAddToCart('${product.title.slice(0, 10)}', ${product.price})">Add to Cart</button>
    `;

    productContainer.appendChild(div);
  });
};

const handleAddToCart = (title, price) => {
  // selected cart item counting:
  const cartCount = document.getElementById("item-count").innerText;
  let convertedCount = parseInt(cartCount);
  convertedCount += 1;
  document.getElementById("item-count").innerText = convertedCount;

  // cart item related:
  const cartItemContainer = document.getElementById("cart-item");

  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
    <h3>${title}</h3>
    <p class="price">${price}</p>
  `;

  cartItemContainer.appendChild(div);
  updateTotal();
};

const updateTotal = () => {
  const allPrice = document.getElementsByClassName("price");

  let sum = 0;
  for (const price of allPrice) {
    // sum = sum + parseFloat(price.innerText.toFixed(2));
    sum += parseFloat(parseFloat(price.innerText).toFixed(2));
  }

  const result = parseFloat(parseFloat(sum).toFixed(2));

  document.getElementById("total").innerText = result;
};

const singleProduct = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

loadAllProduct();
