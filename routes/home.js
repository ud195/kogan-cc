
const { URLS } = require("../enums");
const { totalAverageCubicWeight } = require("../libs/mathUtilities");
const ProductService = require("../services/productService");

async function routeHome (req, res, next) {
  // render the home page with the payload
  res.render('layouts/main', await getProducts());
}

// A function to get the necessary data to display
async function getProducts () {
   // Initialize product service
  const productService = new ProductService();

  // Fetch all products from the api recursively
  const products = await productService.fetchProducts(URLS.PRODUCT_API_URL);

  // Filter products so we only have air conditioners
  const airConditioners = productService.filterProducts(products, 'category', 'Air Conditioners');

  // calculate individual cubic weight of each product
  const airconditionersWithWeight = productService.calculateCubicWeight(airConditioners);
  
  // get the total average cubic weight of all products
  const averageCubicWeight = totalAverageCubicWeight(airconditionersWithWeight).toFixed(2);
  
  return { products: airconditionersWithWeight, averageCubicWeight }
}

module.exports = routeHome
