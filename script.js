
const productsData = [
  {
    title: "FLASH SALE TODAY",
    items: [
      {
        id: 1,
        title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
      },
      {
        id: 2,
        title: "Simple Mobile 4G LTE Prepaid Smartphone",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007560/Image_11_hphpbj.png",
      },
      {
        id: 3,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007560/Image_4_s4ol41.png",
      },
    ],
  },
  {
    title: "BEST SELLERS",
    items: [
      {
        id: 4,
        title: "Samsung Electronics Samsung Galaxy S21 5G",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007560/Image_5_h479sa.png",
      },
      {
        id: 5,
        title: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007560/Image_10_dkyaja.png",
      },
      {
        id: 6,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007560/Image_3_j3zi7c.png",
      },
    ],
  },
  {
    title: "TOP RATED",
    items: [
      {
        id: 7,
        title: "Portable Washing Machine, 11lbs capacity Model 18NMF...",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007560/Image_2_ra1cwc.png",
      },
      {
        id: 8,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007559/Image_9_nenlvo.png",
      },
      {
        id: 9,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007559/Image_7_dm1mj8.png",
      },
    ],
  },
  {
    title: "NEW ARRIVAL",
    items: [
      {
        id: 10,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone...",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007559/Image_1_xxwkep.png",
      },
      {
        id: 11,
        title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007559/Image_12_v7fnoy.png",
      },
      {
        id: 12,
        title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart...",
        price: "$1,500",
        image:
          "https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007559/Image_8_dtbcxv.png",
      },
    ],
  },
];

const newsData = [
  {
    author: "Kristin",
    date: "19 Dec, 2013",
    views: 453,
    title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    text: "Maecenas scelerisque arcu quis tempus egestas. Ligula diam molestie lectus.Maecenas scelerisque arcu quis tempus egestas. Ligula diam molestie lectus.",
    img: "./assets/photos/unsplash_iZVrfElG1t0.png"
  },
  {
    author: "Robert",
    date: "28 Nov, 2015",
    views: 738,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    text: "Mauris scelerisque odio id rutrum volutpat. Pellentesque euismod vitae.Maecenas scelerisque arcu quis tempus egestas. Ligula diam molestie lectus.",
    img: "./assets/photos/unsplash_6MNmDi1hc_Y.png"
  },
  {
    author: "Arlene",
    date: "9 May, 2014",
    views: 826,
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    text: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta odio sed suscipit.Maecenas scelerisque arcu quis tempus egestas. Ligula diam molestie lectus.",
    img: "./assets/photos/unsplash_FO7JIlwjOtU.png"
  }
];


const products = [
  {
    id: 1,
    badge:"HOT",
    badgeClass:"hot",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price:70,
    reviews:"(738)"
  },

  {
    id: 2,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Samsung Electronics Samsung Galaxy S21 5G",
    price:2300,
    reviews:"(536)"
  },

  {
    id: 3,
    badge:"BEST DEALS",
    badgeClass:"best",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price:360,
    reviews:"(423)"
  },

  {
    id: 4,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Portable Washing Machine, 11lbs capacity Model 18NMF...",
    price:80,
    reviews:"(816)"
  },

  {
    id: 5,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Wired Over-Ear Gaming Headphones with USB",
    price:1500,
    reviews:"(647)"
  },

  {
    id: 6,
    badge:"25% OFF",
    badgeClass:"off",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price:1200,
    reviews:"(877)"
  },

  {
    id: 7,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price:250,
    reviews:"(426)"
  },

  {
    id: 8,
    badge:"SALE",
    badgeClass:"sale",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"4K UHD LED Smart TV with Chromecast Built-In",
    price:220,
    reviews:"(583)"
  },
    {
    id: 9,
    badge:"HOT",
    badgeClass:"hot",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price:70,
    reviews:"(738)"
  },

  {
    id: 10,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Samsung Electronics Samsung Galaxy S21 5G",
    price:2300,
    reviews:"(536)"
  },

  {
    id: 11,
    badge:"BEST DEALS",
    badgeClass:"best",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price:360,
    reviews:"(423)"
  },

  {
    id: 12,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Portable Washing Machine, 11lbs capacity Model 18NMF...",
    price:80,
    reviews:"(816)"
  },

  {
    id: 13,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Wired Over-Ear Gaming Headphones with USB",
    price:1500,
    reviews:"(647)"
  },

  {
    id: 14,
    badge:"25% OFF",
    badgeClass:"off",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price:1200,
    reviews:"(877)"
  },

  {
    id: 15,
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price:250,
    reviews:"(426)"
  },

  {
    id: 16,
    badge:"SALE",
    badgeClass:"sale",
    image:"https://res.cloudinary.com/dgpf0kufs/image/upload/v1778007561/Image_6_kenyki.png",
    title:"4K UHD LED Smart TV with Chromecast Built-In",
    price:220,
    reviews:"(583)"
  }
];

const showcaseContainer = document.getElementById("showcase-container");
const newsContainer = document.getElementById("newsContainer");
const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");



let basket = JSON.parse(localStorage.getItem("basket")) || [];

const itemsPerPage = 12;
let currentPage = 1;





function renderShowcase() {

  let content = "";

  productsData.forEach(column => {

    let items = "";

    column.items.forEach(product => {

      items += `

        <div class="showcase-item">

          <img 
            src="${product.image}" 
            alt="product" 
            class="showcase-img"
          >

          <div class="showcase-info">

            <h4>${product.title}</h4>

            <div class="showcase-price">
              ${product.price}
            </div>

          </div>

        </div>

      `;
    });

    content += `

      <div class="showcase-column">

        <h3>${column.title}</h3>

        ${items}

      </div>

    `;
  });

  if (showcaseContainer) {
    showcaseContainer.innerHTML = content;
  }

}





function renderNews() {

  if (!newsContainer) return;

  newsContainer.innerHTML = newsData.map(news => `

    <div class="news-card">

      <img src="${news.img}" alt="${news.title}">

      <div class="news-content">

        <div class="news-meta">

          <img 
            src="./assets/icons/userCircle.png" 
            alt="${news.author}"
          >

          <span>${news.author}</span>

          <img 
            src="./assets/icons/CalendarBlank.png" 
            alt="Date"
          >

          <span>${news.date}</span>

          <img 
            src="./assets/icons/ChatCircleDots.png" 
            alt="Views"
          >

          <span>${news.views}</span>

        </div>

        <h4>${news.title}</h4>

        <p>${news.text}</p>

        <a href="#" class="read-more">
          READ MORE 
          <i class="fas fa-arrow-right"></i>
        </a>

      </div>

    </div>

  `).join("");

}





function renderProducts(page) {

  if (!productContainer) return;

  productContainer.innerHTML = "";

  const start = (page - 1) * itemsPerPage;

  const end = start + itemsPerPage;

  const paginatedProducts = products.slice(start, end);




  paginatedProducts.forEach(product => {

    productContainer.innerHTML += `

      <div class="card">

        ${
          product.badge
            ?
            `
              <div class="badge ${product.badgeClass}">
                ${product.badge}
              </div>
            `
            :
            ""
        }

        <div class="image-box">

          <img src="${product.image}" alt="">

        </div>

        <div 
          class="cart-btn"
          onclick="addToCart(${product.id})"
        >

          <img 
            src="./assets/icons/ShoppingCartSimple.png"
            alt=""
            width="18"
          >

        </div>

        <div class="rating-row">

          <div class="stars">

            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>

          </div>

          <span class="reviews">
            ${product.reviews}
          </span>

        </div>

        <div class="title">
          ${product.title}
        </div>

        <div class="price">
          $${product.price}
        </div>

      </div>

    `;
  });

}





function setupPagination() {

  const pageButtons = document.querySelectorAll(".page-btn");

  pageButtons.forEach(button => {

    button.addEventListener("click", () => {

      if (button.classList.contains("arrow")) return;

      currentPage = Number(button.textContent);

      pageButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      renderProducts(currentPage);

    });

  });

}





function addToCart(id) {

  const selectedProduct = products.find(
    product => product.id === id
  );

  const existProduct = basket.find(
    item => item.id === id
  );



  if (existProduct) {

    existProduct.count += 1;

  } else {

    basket.push({
      ...selectedProduct,
      count: 1
    });

  }



  localStorage.setItem(
    "basket",
    JSON.stringify(basket)
  );



  updateCartCount();



  Swal.fire({
    title: "Added Successfully!",
    text: "Product added to cart",
    icon: "success",
    timer: 1200,
    showConfirmButton: false
  });

}





function updateCartCount() {

  let totalCount = 0;

  basket.forEach(item => {
    totalCount += item.count;
  });

  if (cartCount) {
    cartCount.innerText = totalCount;
  }

}





renderShowcase();

renderNews();

renderProducts(currentPage);

setupPagination();

updateCartCount();