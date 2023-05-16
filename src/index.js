// import DATABASE_POSTS from "./db-var";
// import DATABASE_COMMENTS from "./db-var";
// import DATABASE_PROFILE from "./db-var";
// import DATABASE_PRODUCTS from "./db-var";
//1 зробити фетч за продуктами
//2 створити розмітку одного елементу списку
//3 за допомогою map перебераємо масив товарів
//4 додаємо в розмітку елементи списку

const DATABASE_POSTS = 'http://localhost:3000/posts'
const DATABASE_COMMENTS = 'http://localhost:3000/comments'
const DATABASE_PROFILE = 'http://localhost:3000/profile'
const DATABASE_PRODUCTS = 'http://localhost:3000/products'

const myList = document.querySelector('#products');
async function getProduct (){
const res = await fetch(DATABASE_PRODUCTS);
console.log(res);
const products = await res.json()
console.log(products)
return products
}
// console.log(products);
console.log(getProduct());
// console.log(products);
function makeMarkup (products){
    return products.id?.map(({image, name}) => {
        return `<li> 
        <img src="${image}" alt="${name}">
        <p>${name}</p>
        <button type="button">Add to card</button>
        </li>`
    })
}
console.log(makeMarkup());
const markup = makeMarkup(getProduct);
// console.log(markup)
myList.insertAdjacentElement("beforeend", ...markup);