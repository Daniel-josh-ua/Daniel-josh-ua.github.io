$(document).ready(() => {
    $(".mdb-select").materialSelect();
    getProducts();
  })
  
  function getProducts() {
  $.get("jsonfile/product.json", (products) => {
    renderProducts(products);
  })
  .fail(() => { console.log("error"); }); }