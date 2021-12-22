
const Login = (name) => {
  return new Promise(resolve => {
    setTimeout(() => {

      const authorisation = true
      if (authorisation == true) {
        resolve("Login success");
      }
    },1000)
  })
}
const addToCart = (product_name) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (product_name == "tv")
        resolve(`${product_name} added to cart`)
      else reject("Product not available")
    }, 2000)
  })
};

let order = async () => {
  try {
    let log =  await Login("subham");
    console.log(log)
    let product = await addToCart("tv")
    console.log(product)
  } catch (error) {
    console.log(error)
  }
}
order()

