class Product {
   constructor(title = "DEFAULT", image = "", desc = "", price = 0) {
      this.title = title
      this.imageURL = image
      this.description = desc
      this.price = price
   }

   getData() {
      return { title: this.title, image: this.imageURL, description: this.description, price: this.price }
   }
}

class ProductItem {
   constructor(product) {
      this.product = product
   }

   render() {
      const prodEl = document.createElement("li")
      prodEl.className = "product-item"
      prodEl.innerHTML = `
                <div>
                 <img src="${this.product.imageURL}" alt="${this.product.name}">
                 <div class="product-item__content">
                    <h2>${this.product.name}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                 </div>
                </div>
             `
      return prodEl
   }
}

class ProductList {
   products = [
      new Product(
         "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
         "This is a soft pillow!",
         19.99,
         "A Pillow"
      ),
      new Product(
         "A Carpet",
         "https://www.publicdomainpictures.net/pictures/280000/velka/plain-red-background.jpg",
         "This is a carpet!",
         89.99
      ),
   ]

   // constructor() {}

   render() {
      const renderHook = document.getElementById("app")
      const prodList = document.createElement("ul")

      prodList.className = "product-list"
      for (const prod of this.products) {
         //? CALL THE CONSTRUCTOR OF ProductItem CLASS
         const productItem = new ProductItem(prod)
         const prodEl = productItem.render()

         prodList.append(prodEl)
      }

      renderHook.append(prodList)
   }
}

const productList = new ProductList()
productList.render()
