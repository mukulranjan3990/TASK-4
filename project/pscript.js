const products = [
  { name: "Smartphone", category: "electronics", price: 699, rating: 4.5, image: "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg" },
  { name: "T-shirt", category: "fashion", price: 29, rating: 4.0, image: "https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg" },
  { name: "Laptop", category: "electronics", price: 999, rating: 4.8, image: "https://i.pinimg.com/736x/81/f6/0b/81f60b410e04dfba4c78662bd662288d.jpg" },
  { name: "Book: JS Guide", category: "books", price: 49, rating: 4.7, image: "https://i.pinimg.com/736x/e4/60/6c/e4606c469e29c18e7a2535efe560da8c.jpg" },
  { name: "Sneakers", category: "fashion", price: 89, rating: 4.2, image: "https://i.pinimg.com/736x/64/7c/ad/647cad16ede10f3ac32e84c8f14831e9.jpg" },
  { name: "Headphones", category: "electronics", price: 199, rating: 4.3, image: "https://i.pinimg.com/736x/a9/c8/ab/a9c8abe2fe655aa90cc4d05198718926.jpg" },
  { name: "Jeans", category: "fashion", price: 49, rating: 4.1, image: "https://i.pinimg.com/736x/e6/f2/cb/e6f2cb8d3249382afdeea032afd944a4.jpg" },
  { name: "Jacket", category: "fashion", price: 120, rating: 4.6, image: "https://i.pinimg.com/736x/61/07/5f/61075f2fc5ab4ceb5604a91f10c2350f.jpg" },
  { name: "Sunglasses", category: "fashion", price: 75, rating: 4.3, image: "https://i.pinimg.com/736x/4c/1a/dc/4c1adc689b4559aba264820d637c0c76.jpg" },
  { name: "Hat", category: "fashion", price: 25, rating: 4.0, image: "https://i.pinimg.com/736x/fe/bf/9a/febf9a09598ae368bdcbac91e6f143cc.jpg" },
  { name: "Scarf", category: "fashion", price: 20, rating: 4.2, image: "https://i.pinimg.com/736x/68/45/a1/6845a12b0ecdcbcb871aa2775c88caa0.jpg" },
  { name: "Watch", category: "fashion", price: 150, rating: 4.7, image: "https://i.pinimg.com/736x/36/18/79/361879aae0ebd7e22af746d931a94979.jpg" },
  { name: "Belt", category: "fashion", price: 35, rating: 4.1, image: "https://i.pinimg.com/736x/be/92/19/be9219a06342de73d57bb6c69b79a221.jpg" },
  { name: "Gloves", category: "fashion", price: 30, rating: 4.4, image: "https://i.pinimg.com/736x/0b/dd/25/0bdd2546716429de5ae78218f5fc32e9.jpg" },
  { name: "Boots", category: "fashion", price: 95, rating: 4.5, image: "https://i.pinimg.com/736x/a7/64/e2/a764e26fe18171023b770f16e15c92c6.jpg" },
  { name: "Handbag", category: "fashion", price: 200, rating: 4.8, image: "https://i.pinimg.com/736x/e1/0e/c8/e10ec8c945d6a9d4900003737e9a5d96.jpg" },
  { name: "Tablet", category: "electronics", price: 499, rating: 4.4, image: "https://i.pinimg.com/736x/cb/26/b2/cb26b2ba77dfa07d0674492d5f26be57.jpg" },
  { name: "Smartwatch", category: "electronics", price: 199, rating: 4.6, image: "https://i.pinimg.com/736x/07/dc/d4/07dcd45cd41417dde08fed1772fe708f.jpg" },
  { name: "Gaming Console", category: "electronics", price: 399, rating: 4.7, image: "https://i.pinimg.com/736x/ab/2c/a4/ab2ca44d143c9dc66011f95ec4b69cad.jpg" },
  { name: "Bluetooth Speaker", category: "electronics", price: 99, rating: 4.5, image: "https://i.pinimg.com/736x/3b/65/04/3b65042b9ca350c1128bde0ebb3a1b11.jpg" },
  { name: "Drone", category: "electronics", price: 799, rating: 4.8, image: "https://i.pinimg.com/736x/74/17/f8/7417f8849f79db44234cd40f3915e573.jpg" },
  { name: "Camera", category: "electronics", price: 599, rating: 4.6, image: "https://i.pinimg.com/736x/ac/7c/c5/ac7cc5b83fbf128fb0409212383dfa55.jpg" },
  { name: "E-Reader", category: "electronics", price: 129, rating: 4.3, image: "https://i.pinimg.com/736x/bf/fe/9e/bffe9e12103c3a7a7bb1715012a82f9c.jpg" },
  { name: "Wireless Charger", category: "electronics", price: 49, rating: 4.2, image: "https://i.pinimg.com/736x/26/a7/fd/26a7fd8f51a91874a6c4e70dd80a15fa.jpg" },
  { name: "Portable Hard Drive", category: "electronics", price: 89, rating: 4.4, image: "https://i.pinimg.com/736x/e1/49/bb/e149bb67f9dbcf5eaa0cedf6c3306365.jpg" },
  { name: "VR Headset", category: "electronics", price: 299, rating: 4.7, image: "https://i.pinimg.com/736x/f9/87/76/f98776af2ac0e4c9c3575daa027368cb.jpg" },
  { name: "Clean Code", category: "books", price: 45, rating: 4.9, image: "https://i.pinimg.com/736x/e6/4f/c7/e64fc791f9d21be079757e9c6fcf1de8.jpg" },
  { name: "Design Patterns", category: "books", price: 55, rating: 4.8, image: "https://tse1.mm.bing.net/th/id/OIP.bcgqOshtw86HzyUCq1dAIgAAAA?cb=iwp1&rs=1&pid=ImgDetMain" },
  { name: "You Don't Know JS", category: "books", price: 40, rating: 4.7, image: "https://tse1.mm.bing.net/th/id/OIP.uJMAGAgU9jMzALPdNhaGrQHaEK?cb=iwp1&rs=1&pid=ImgDetMain" },
  { name: "Eloquent JavaScript", category: "books", price: 35, rating: 4.6, image: "https://th.bing.com/th/id/R.552b455821acc2f66ddd7e4de0de47f8?rik=zkhvZVqb41FnRA&pid=ImgRaw&r=0" },
  { name: "The Pragmatic Programmer", category: "books", price: 50, rating: 4.9, image: "https://codequotient.com/blog/wp-content/uploads/2021/02/The-Pragmatic-Programmer.jpg" },
  { name: "Introduction to Algorithms", category: "books", price: 80, rating: 4.8, image: "https://th.bing.com/th/id/OIP.zDzTXaGFEtQuSUSvkxz2DAHaD4?o=7&cb=iwp1rm=3&rs=1&pid=ImgDetMain" },
  { name: "JavaScript: The Good Parts", category: "books", price: 30, rating: 4.5, image: "https://tse1.mm.bing.net/th/id/OIP.vE1Ta-eHJU4sE8L9BP4HjwHaHa?cb=iwp1&rs=1&pid=ImgDetMain" },
  { name: "Cracking the Coding Interview", category: "books", price: 60, rating: 4.8, image: "https://i0.wp.com/ebornbooks.com/wp-content/uploads/2022/10/20221004_120309.jpg?fit=2064%2C1548&ssl=1" },
  { name: "The Mythical Man-Month", category: "books", price: 25, rating: 4.4, image: "https://austinhenley.com/blog/images/mythicalmanmonth.jpg" },
  { name: "Refactoring", category: "books", price: 65, rating: 4.7, image: "https://tse3.mm.bing.net/th/id/OIP.q9s6ZLh_0agsp--6BwBNjgHaD4?cb=iwp1&rs=1&pid=ImgDetMain" }
];
  
  const productList = document.getElementById("product-list");
  const categoryFilter = document.getElementById("category-filter");
  const priceRange = document.getElementById("price-range");
  const priceLabel = document.getElementById("price-label");
  const sortBy = document.getElementById("sort-by");
  
  function renderProducts(data) {
    productList.innerHTML = "";
    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ${p.rating} ⭐</p>
      `;
      productList.appendChild(div);
    });
  }
  
  function filterAndSort() {
    const category = categoryFilter.value;
    const maxPrice = +priceRange.value;
    const sort = sortBy.value;
  
    let filtered = products.filter(p => 
      (category === "all" || p.category === category) &&
      p.price <= maxPrice
    );
  
    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }
  
    renderProducts(filtered);
  }
  
  categoryFilter.addEventListener("change", filterAndSort);
  priceRange.addEventListener("input", () => {
    priceLabel.textContent = `Max Price: $${priceRange.value}`;
    filterAndSort();
  });
  sortBy.addEventListener("change", filterAndSort);
  
  // Initial render
  priceLabel.textContent = `Max Price: $${priceRange.value}`;
  renderProducts(products);
  