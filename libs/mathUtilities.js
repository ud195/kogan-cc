const { MATH_CONSTANTS } = require("../enums");

// A reducer function to add values
const sumAll = (values) => (
  values.reduce((a,b) => a + b)
);

// A function to calculate the cubic weight of a product
const calculateCubicWeight = (width = 0, length = 0, height = 0) => (
  ((width * length * height) * MATH_CONSTANTS.BASE_WEIGHT_CONSTANT)
);

// A function to calculate the total average cubic weight of products
const totalAverageCubicWeight = (products) => {
  const cubicWeightsSum = sumAll(products.map((product) => product.cubicWeight));
  return (cubicWeightsSum/products.length);
};

module.exports.calculateCubicWeight = calculateCubicWeight
module.exports.totalAverageCubicWeight = totalAverageCubicWeight
