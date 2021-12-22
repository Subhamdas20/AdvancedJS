const Login = (email,name,callback)=>{
 setTimeout(()=>{
    console.log("Login successful")
    callback("Tv")
 },3000)
}

const addToCart=(product_name,callback)=>{
    setTimeout(()=>{
        console.log(`${product_name} added to cart`)
        callback(999)
    },2000)
}

const placeOrder = (price)=>{
    setTimeout(()=>{
        console.log(`Order placed worth ${price}RS`)
    })
}

const order = Login("subham20.sd@gmail.com","subham",(product)=>{
    addToCart(product,(price)=>{
        placeOrder(price)
    })
})

