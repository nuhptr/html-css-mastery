class Shop {
   render() {
      this.cart = new ShoppingCart("app")
      this.cart.render()

      this.productList = new ProductList()
      productList.render()
   }
}

class App {
   static cart

   static init() {
      const shop = new Shop()
      shop.render()

      this.cart = shop.cart
   }

   static addProductToCart(product) {
      this.cart.addProduct(product)
   }
}

App.init()
