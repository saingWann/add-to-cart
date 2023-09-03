const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelry",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelry",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelry",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelry",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
];

const categories = [
    `women's clothing` , 'jewelry' , `men's clothing` , 'electronics'
]


const productIdInCart = [];

categories.unshift('all')


const btnWrapper = document.querySelector('[btnWrapper]');

const renderByCategory = (categoryName,button) => {

    // the question mark here is to check if "btnWrapper has the children with class active"
    btnWrapper.querySelector('.active')?.classList.remove("active");
    button.classList.add('active')

    productCardContainer.innerHTML = null;

    productsRender(products.filter(product =>
    
        product.category === categoryName || categoryName === 'all'
    ))

}


// creating button coponent
const creatCategoriesBtn = (categoryName) => {

    const btnEle = document.createElement('button');
    btnEle.className = 'categoryBtn border border-dark mt-3 mt-lg-0 px-2 py-1 rounded-1 fw-normal me-2';
    btnEle.innerText = categoryName;

    btnEle.onclick = () =>{
        
        renderByCategory(categoryName,btnEle)
    
    }
    return btnEle;
}


// generating star rating base on the api value
const generateStars = (rate) =>{
    let starHtml = ``;

    for(i = 1 ; i <=5 ; i++){

        starHtml += rate >= i 
        ? `<i class = "bi bi-star-fill me-2"></i>` 
        : `<i class = "bi bi-star me-2"></i>`

    }
    return starHtml;
}

const productCardContainer = document.querySelector('.productCardContainer');
const itemCartsContainer = document.querySelector('[item-container]');

const generateProductCard = (product) => {
    const newDiv = document.createElement('div');
    newDiv.className  = 'productsContainer col-12 col-md-6 col-lg-4';
    const newCard = `
                <div  class="productImgaeContainer" >
                    <img src="${product.image}" alt="photo">
                </div>
                <div class="productInfo border">
                    <h3 class="product-name ">${product.title}</h3>
                    <p productDescription class="">${product.description}</p>
                    <div rating class="d-flex justify-content-between mb-2">
                    <div>
                    ${generateStars(product.rating.rate.toFixed())}
                    </div>
                    <p rating class="m-0">(${product.rating.rate}/5)</p>
                    </div>
                    <hr>
                    <spanclass="fw-bold"><span price>${product.price}</span>$</span>
                    <button addToCartBtn class="border-0 px-3 fw-bold w-100 py-1 rounded">Add to Cart</button>
                </div>
    `;
    newDiv.innerHTML = newCard;
    const addToCardBtnEle = newDiv.querySelector('[addToCartBtn]');
    addToCardBtnEle.setAttribute('add-to-cart-btn-id',product.id);
    // console.log(addToCardBtnEle);
    if(productIdInCart.includes(product.id)){

        addToCardBtnEle.classList.add('active');
        addToCardBtnEle.innerText = 'Added';

    }

    addToCardBtnEle.onclick = () => {
        
        if(addToCardBtnEle.classList.contains("active")){
            // console.log("already added");
            deleteItemFromCart(product.id);

        }else{
            //add to cart button state will change to 
            addToCart(product.id);
        }
    
    }


    return newDiv;
}

// add to cart fucntion
const addToCart = (productId) => {
    const currentAddToCartBtn = document.querySelector(`[add-to-cart-btn-id = '${productId}']`);
    currentAddToCartBtn.classList.add('active')
    currentAddToCartBtn.innerText = 'Added'
    // addToCardBtnEle.style.pointerEvents = "none"

    productIdInCart.push(productId);
    itemCartsContainer.append(renderItemToCart(productId));
    getTotalCost();
    calculateBadgeCount();

    Toast.fire({
        icon: 'success',
        title: 'Add to cart successfully'
      })
};



// add to cart toast
const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  

// calcute badge count
const badgeEle = document.querySelector('[badge]');
const badgeInnerCartEle = document.querySelector("[badgeCountInnerCart]");

const calculateBadgeCount = () => {
    const itemCountInCart = [...itemCartsContainer.children];
    badgeInnerCartEle.innerText = itemCountInCart.length;
    badgeEle.innerText = itemCountInCart.length;
}

const productsRender = (productsToRender) => {

    productsToRender.forEach(product => {
        
       productCardContainer.append(generateProductCard(product))
    });
   
}


// generating category buttons
const categoriesRender = (categories) =>{
    categories.forEach(category => {

        btnWrapper.append(creatCategoriesBtn(category));
        
    })
    btnWrapper.children[0].classList.add('active');
}

const renderItemToCart = (id) => {

    const currentProduct = products.find( product => product.id === id )
        const cartItemContainer = document.createElement('div');
        cartItemContainer.className = 'item-in-cart pb-2 mt-2';
        cartItemContainer.setAttribute("item-in-cart-id",id)
        cartItemContainer.innerHTML = `
        <span class="px-2" >
            <img class="item-in-cart-img" src="${currentProduct.image}" alt="">
        </span>

        <div class="border py-3 px-2">
            <span class="  d-flex justify-content-between align-items-center">

                <p class="fw-bold m-0 pt-3 text-truncate">${currentProduct.title}</p>
                <button deleteBtnEle class="btn text-danger">
                    <i class="bi bi-trash-fill"></i>
                </button>
                
            </span>

            <span class="pt-1 px-2 d-flex justify-content-between align-items-end">
                <span class= "fw-bold text-black-50"><span class="item-cost-in-cart">${currentProduct.price}
                </span>$</span>
                <span quantityControlBtnContainer class="w-50 d-flex justify-content-end align-items-center gap-2">
                    <button minusButton class="btn btn-dark text-white">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input quantity type="number" min="1" value="1" class="form-control">
                    <button plusButton class="btn btn-dark text-white">
                        <i class="bi bi-plus"></i>
                    </button>
                </span>
            </span>
        </div>   
     `;

        const deleteBtnEle = cartItemContainer.querySelector('[deleteBtnEle]');

        deleteBtnEle.onclick = () => {
        deleteItemFromCart(id);
    }

    const decreaseQuantityBtnEle = cartItemContainer.querySelector('[minusButton]');
    const currentQuantity = cartItemContainer.querySelector('[quantity]')
    const itemCostInCart = cartItemContainer.querySelector('.item-cost-in-cart');

    // decrease quantity
    decreaseQuantityBtnEle.onclick = () => {

        // if user want to go lower than 1 that mean he might want to remove from cart
        if(parseFloat(currentQuantity.value) === 1){

            // sweet alert2
            deleteItemFromCart(id);
            return;
        }

        currentQuantity.value --;
        itemCostInCart.innerText = parseFloat(currentProduct.price) * Number(currentQuantity.value);
        getTotalCost();
        
    }

    // increase quantity
    const increaseQuantityBtnEle = cartItemContainer.querySelector('[plusButton]');
    increaseQuantityBtnEle.onclick = () => {
        currentQuantity.value ++;
        itemCostInCart.innerText = (parseFloat(currentProduct.price) * Number(currentQuantity.value)).toFixed();
        getTotalCost();
        
    }

    return cartItemContainer;

};

// delete item from cart
const deleteItemFromCart = (id) => {
    const currentProductInCartToDelete = document.querySelector(`[item-in-cart-id = '${id}']`)
    const currentAddToCartBtn = document.querySelector(`[add-to-cart-btn-id = '${id}']`)
 
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this from cart?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#212529',
        cancelButtonColor: '#dee2e6',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Item has been deleted.',
            'success'
            )
    
            // the add-to-cart will remain the same whenever re-render with category
            const index = productIdInCart.indexOf(id);
            if (index > -1) { // only splice array when item is found
                productIdInCart.splice(index, 1); // 2nd parameter means remove one item only
            }
    
            // remove the current item from cart
            currentProductInCartToDelete.remove();
            currentAddToCartBtn.classList.remove('active');
            currentAddToCartBtn.innerText = 'Add to Cart';
            // return the add to cart btn to normal state 
            // so that the use can buy again 
           
            // calculate the total cost again
            getTotalCost();
            calculateBadgeCount();               
        }
        })
    }


// getting total cost in cart
const getTotalCost = () =>{
    const totalCost = [...document.querySelectorAll('.item-cost-in-cart')];
    const allCost = totalCost.reduce((pv,cv) => pv + parseFloat(cv.innerHTML),0);
    const grandTotalCost = document.querySelector('[total-cost]');
    grandTotalCost.innerText = (allCost.toFixed());
    // console.log(allCost);
    const taxAmount = document.querySelector('[tax]');
    taxAmount.innerText = ((allCost / 100) * 5).toFixed();

    const totalBalance = document.querySelector('[total-balance]');
    totalBalance.innerText = allCost + Number(taxAmount.innerText);

}

// place order btn related stuffs

const placeOrderBtnEle = document.querySelector('[place-order]');

const bsOffcanvas = new bootstrap.Offcanvas('#myCart');

const placeOrderFunction = () => {

    const checkOut = [];
    const allItemIncart = document.querySelectorAll('.item-in-cart');
    const myOrder = {};
    
    Swal.fire({
        title: 'Are you sure you want to check out?',
        text: "Please confrim to place order",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#212529',
        cancelButtonColor: '#dee2e6',
        confirmButtonText: 'Yes, place order now'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Successful',
            'Your order has been placed.',
            'success'
          )
          
          allItemIncart.forEach(container => {

            const item = {};
            item.productId = container.getAttribute('item-in-cart-id');
            item.quantity = container.querySelector('[quantity]').value;
            checkOut.push(item);
            return checkOut
    
        })

            myOrder.item = checkOut;
            myOrder.total = document.querySelector('[total-balance]').innerText;
            myOrder.user_id = 5;
            myOrder.order_id = "GSX2034AS"
            myOrder.user_name = "saing wann";
            console.log(myOrder);

            // to remove active state of  add to cart btn 
            myOrder.item.forEach(item => {
                // console.log(item.productId);
                const index = productIdInCart.indexOf(Number(item.productId));
                    
                if (index > -1) { // only splice array when item is found
                productIdInCart.splice(index, 1); // 2nd parameter means remove one item only

                // remove the current item from cart
                const currentProductInCartToDelete = document.querySelector(`[item-in-cart-id = '${Number(item.productId)}']`)
                const currentAddToCartBtn = document.querySelector(`[add-to-cart-btn-id = '${Number(item.productId)}']`)

                currentProductInCartToDelete.remove();
                currentAddToCartBtn.classList.remove('active');
                currentAddToCartBtn.innerText = 'Add to Cart';
                // return the add to cart btn to normal state 
                // so that the use can buy again 
            
                // calculate the total cost again
                getTotalCost();
                calculateBadgeCount();   
                
                bsOffcanvas.hide();
            }
            })
        }
    })    
}

placeOrderBtnEle.onclick = () => {
    const itemContainerInCart = document.querySelector('[item-container]');
    if(itemContainerInCart.querySelector('.item-in-cart')){
        placeOrderFunction()
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please add item to place order',
            footer: '<a class = "text-dark" href="#footer">Why do I have this issue?</a>'
          })

          bsOffcanvas.hide();
    }
}

// scroll to top btn
const jumpTopBtnEle = document.querySelector('[scrollToTop]');

window.addEventListener("scroll", (event) => {

    let scroll = this.scrollY;
    if(scroll < 300){
        jumpTopBtnEle.style.display = 'none';
    }else {
        
        jumpTopBtnEle.style.display = 'flex';
    }
});


(()=>{

    productsRender(products);
    categoriesRender(categories)
})()
// new-rebels-boyan-hickory-rolltop-backbag-recyled-n.jpg

