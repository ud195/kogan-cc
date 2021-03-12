// handlebars helper method (view engine template helpers)
const hbsHelpers = () => {
  return {
    display2Decimal: (value) => {
      return value.toFixed(2)
    }
  }
}

module.exports = hbsHelpers