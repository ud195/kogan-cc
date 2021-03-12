const ApiUtilities = require("../libs/apiUtilities");
const { MATH_CONSTANTS } = require("../enums");
const { calculateCubicWeight } = require("../libs/mathUtilities");

// Service class to handle product related queries
class ProductService {
  constructor() {
    this.apiUtilities = new ApiUtilities();
  }

  // Method to fetch all the products from the api
  async fetchProducts(url) {
    return await this.apiUtilities.fetchAll(url);
  }

  // Method to filter products based on an attribute and a value
  filterProducts = ( dataSet = [], attribute = '', value = '') => (
     dataSet.filter((data) => data[attribute] === value)
  );

  // A Method to calculate and assign the cubic weight to a set of products
  calculateCubicWeight = (products) => ( products.map((product) => ({
    ...product,
    cubicWeight: calculateCubicWeight(
      product.size.width/MATH_CONSTANTS.CONVERSION_FACTOR,
      product.size.length/MATH_CONSTANTS.CONVERSION_FACTOR,
      product.size.height/MATH_CONSTANTS.CONVERSION_FACTOR
    )
  })));
}

module.exports = ProductService;