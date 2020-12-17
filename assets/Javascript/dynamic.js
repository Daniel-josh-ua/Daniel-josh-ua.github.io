function createTemplate(product) {
    return `
<div class="col-md-4 mb-5">
<div >
<div class="view zoom overlay rounded z-depth-2" style="height: 260px;">
<img class="img-fluid w-100"
  src="${product.image}" alt="Sample">
<a href="#!">
  <div class="mask">
    <img class="img-fluid w-100"
      src="${product.image}">
    <div class="mask rgba-black-slight"></div>
  </div>
</a>
</div>
<div class="text-center pt-4">
<h5>${product.name}</h5>
<p><span class="mr-1"><strong>$${product.price}</strong></span></p>
</div>
</div>
</div>
    `;
}

function renderProducts(products) {
    const template =
    products.length === 0 ? `
    <p>No matching results found.</p>
    ` : products.map((product) => createTemplate(product)).join("\n");
    $("#products").html(template);
  }