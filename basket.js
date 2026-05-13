basket = JSON.parse(localStorage.getItem("basket")) || [];

const basketItems = document.getElementById("basket-items");

const subtotal = document.getElementById("subtotal");

const total = document.getElementById("total");

function renderBasket(){

  basketItems.innerHTML = "";

  let totalPrice = 0;

  basket.forEach(item => {

    totalPrice += item.price * item.count;

    basketItems.innerHTML += `

      <tr>

        <td>
          <div class="product-info">

            <span 
              class="remove-btn red"
              onclick="removeItem(${item.id})"
            >
              ×
            </span>

            <img src="${item.image}" alt="">

            <span>${item.title}</span>

          </div>
        </td>

        <td class="price">
          $${item.price}
        </td>

        <td>

          <div class="quantity-control">

            <button onclick="decreaseCount(${item.id})">
              -
            </button>

            <input type="text" value="${item.count}" readonly>

            <button onclick="increaseCount(${item.id})">
              +
            </button>

          </div>

        </td>

        <td class="subtotal">
          $${item.price * item.count}
        </td>

      </tr>

    `;

  });

  subtotal.innerText = `$${totalPrice}`;
  total.innerText = `$${totalPrice}`;

  if (typeof updateCartCount === 'function') {
    updateCartCount();
  }
}

function removeItem(id){

  basket = basket.filter(item => item.id !== id);

  localStorage.setItem(
    "basket",
    JSON.stringify(basket)
  );

  renderBasket();

}

function increaseCount(id){

  const product = basket.find(
    item => item.id === id
  );

  product.count++;

  localStorage.setItem(
    "basket",
    JSON.stringify(basket)
  );

  renderBasket();

}

function decreaseCount(id){

  const product = basket.find(
    item => item.id === id
  );

  if(product.count > 1){

    product.count--;

  }else{

    basket = basket.filter(
      item => item.id !== id
    );

  }

  localStorage.setItem(
    "basket",
    JSON.stringify(basket)
  );

  renderBasket();

}


renderBasket();