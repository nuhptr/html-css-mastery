const productList = {
   products: [
      {
         name: "A Pillow",
         imageURL: "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
         price: 1000,
         description: "This is a soft pillow!",
      },
      {
         name: "A Carpet",
         imageURL: "https://www.publicdomainpictures.net/pictures/280000/velka/plain-red-background.jpg",
         price: 2000,
         description: "This is a carpet!",
      },
   ],
   render() {
      const renderHook = document.getElementById("app")
      const prodList = document.createElement("ul")

      prodList.className = "product-list"
      for (const prod of this.products) {
         const prodEl = document.createElement("li")
         prodEl.className = "product-item"
         prodEl.innerHTML = `
                <div>
                 <img src="${prod.imageURL}" alt="${prod.name}">
                 <div class="product-item__content">
                    <h2>${prod.name}</h2>
                    <h3>${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                 </div>
                </div>
             `
         prodList.append(prodEl)
      }
      renderHook.append(prodList)
   },
}

productList.render()
