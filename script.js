// Fetch the JSON data
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const shopContainer = document.getElementById('shop');

    // Loop through the products and create HTML elements for each
    data.products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';

      // Create the product details
      const nameElement = document.createElement('h2');
      nameElement.textContent = product.name;

      const priceElement = document.createElement('p');
      priceElement.textContent = `$${product.price}`;

      const imageElement = document.createElement('img');
      imageElement.src = "products/" + product.image;
;

      // Append the details to the product element
      productElement.appendChild(nameElement);
      productElement.appendChild(priceElement);
      productElement.appendChild(imageElement);

      // Append the product element to the shop container
      shopContainer.appendChild(productElement);
    });
  });
